import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  console.log(postsFromData(data))
  return (
    <Layout>
      <SEO title="Home" />
      {postsFromData(data)}
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
      <h2>{node.frontmatter.title}</h2>
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