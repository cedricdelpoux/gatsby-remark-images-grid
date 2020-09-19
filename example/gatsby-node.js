const {resolve} = require("path")

const {createFilePath} = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions
  if (node.internal.type === "MarkdownRemark") {
    createNodeField({
      node,
      name: "slug",
      value: createFilePath({
        node,
        getNode,
      }),
    })
  }
}

exports.createPages = async ({graphql, actions: {createPage}, reporter}) => {
  const result = await graphql(
    `
      {
        allMarkdownRemark {
          nodes {
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panic(result.errors)
  }

  const {allMarkdownRemark} = result.data

  if (allMarkdownRemark) {
    allMarkdownRemark.nodes.forEach(({fields: {slug}}) => {
      createPage({
        path: slug,
        component: resolve("src/templates/post.js"),
      })
    })
  }
}
