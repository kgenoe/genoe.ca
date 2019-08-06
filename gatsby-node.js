/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions
    if (node.internal.type === `MarkdownRemark`) {        
        const fileNode = getNode(node.parent)
        const slug = createFilePath({ node, getNode, basePath: fileNode.relativeDirectory })
        
        if (fileNode.relativeDirectory.includes("pages/posts")) {
            createNodeField({ node, name: `slug`, value: slug })
            createNodeField({ node, name: `contentType`, value: "post" })
        }
        if (fileNode.relativeDirectory.includes("pages/projects")) {
            createNodeField({ node, name: `slug`, value: slug })
            createNodeField({ node, name: `contentType`, value: "project" })
        }
    }
}


exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    // **Note** The graphql function call returns a Promise
    // see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise for more info
    return graphql(`
    {
        allMarkdownRemark(
            filter: { fields: { slug: { ne: null } } }
        ){
            edges {
                node {
                    fields{
                        slug
                        contentType
                    }
                    fileAbsolutePath
                }
            }
        }
    }  
    `).then(result => {
        result.data.allMarkdownRemark.edges.forEach(( { node}) => {
            if (node.fields.contentType === "post") {
                createPage({
                    path: `posts${ node.fields.slug}`,
                    component: path.resolve(`./src/templates/post.js`),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables
                        slug: node.fields.slug
                    },
                })
            }
            else if (node.fields.contentType === "project") {
                createPage({
                    path: `projects${ node.fields.slug}`,
                    component: path.resolve(`./src/templates/project.js`),
                    context: {
                        // Data passed to context is available in page queries as GraphQL variables
                        slug: node.fields.slug
                    },
                })
            }
        })
    })
}