import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  console.log(postsFromData(data))
  return (
    <Layout>
      <SEO title="Home" />
      {postsFromData(data)}
      <Link 
        to="/posts/"
        activeStyle={{ color: `darkGrey` }}
        style={{ color: `black` }}
      >
      View All Posts
      </Link>
    </Layout>
  )
}

export const query = graphql`
{
  allMarkdownRemark (
    filter: { fields: { slug: { ne: null} } },
    sort: {order: ASC, fields: [frontmatter___date]},
    limit: 2
  ){
    edges {
      node {
        html
        frontmatter {
          title
          date
        }
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
      <p>{node.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: node.html }} />
      <br/>
      <hr/>
      <br/>
      <br/>
    </div>
    )
  });
  return posts;
}