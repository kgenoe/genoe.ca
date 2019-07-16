import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const markdown = data.file.childMarkdownRemark
    return (
        <Layout>
          <SEO title="About Kyle Genoe" />
          <div 
          style={{
            maxWidth: 400, 
            marginLeft: "auto",
            marginRight: "auto",
          }}>
              <div dangerouslySetInnerHTML={{ __html: markdown.html }}/>
          </div>
        </Layout>
    )
}

export const query= graphql`
  {
    file(base: {eq: "about.md"}) {
      childMarkdownRemark {
        html
      }
    }
  }
`