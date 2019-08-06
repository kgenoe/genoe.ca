import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
    console.log(postsFromData(data))
    return (
      <Layout>
        <SEO title="Projects" />
        {postsFromData(data)}
      </Layout>
    )
  }
  
  export const query = graphql`
  {
    allMarkdownRemark (
      filter: { 
        fields: {
           slug: { ne: null},
           contentType: {eq: "post"}
          } 
        },
      sort: {order: ASC, fields: [frontmatter___date]}
    ){
      edges {
        node {
          frontmatter {
            title
            date
          }
          excerpt
          fields {
              slug
          }
        }
      }
    }
  }
  `

  function postsFromData(data) {
    const posts= [];
    data.allMarkdownRemark.edges.forEach(( { node }) => {
      posts.push(
      <div>
        <Link 
          to={`/posts/${node.fields.slug}`}
          activeStyle={{ color: `darkGrey` }}
          style={{ 
            textDecoration: `none`,
            color: `black`,
          }}
        >
            <h2>{node.frontmatter.title}</h2>
        </Link>
        <p>{node.frontmatter.date} - {node.excerpt}</p>
        <hr/>
      </div>
      )
    });
    return posts;
  }