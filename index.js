const visit = require("unist-util-visit")
const unified = require("unified")
const markdown = require("remark-parse")

module.exports = ({markdownAST}, pluginOptions) => {
  visit(markdownAST, "code", (node) => {
    if (!node.lang || node.lang.indexOf("grid") === -1) {
      return
    }

    const className = pluginOptions.className
      ? pluginOptions.className
      : "gatsbyRemarkImagesGrid"
    const meta = node.lang + (node.meta ? " " + node.meta : "")
    let [, columnsCount, figcaption] = meta.split("|")

    if (!columnsCount) {
      columnsCount = 1
    }

    const contentAST = unified().use(markdown).parse(node.value)

    let imagesNodes = []

    visit(contentAST, "image", (node) => {
      node.data = {
        hProperties: {
          width: "100%;",
        },
      }

      imagesNodes.push(node)
    })

    const figcaptionNode = figcaption && {
      type: "paragraph",
      data: {
        hName: "figcaption",
        hProperties: {
          className: `${className}-figcaption`,
        },
      },
      children: [
        {
          type: "text",
          value: figcaption,
        },
      ],
    }

    const gridNode = {
      type: "list",
      data: {
        hName: "div",
        hProperties: {
          className: `${className}-grid`,
          style: `
            grid-template-columns: repeat(auto-fill, minmax(${
              Math.floor(100 / columnsCount) - 2
            }%, 1fr));
          `,
        },
      },
      children: imagesNodes,
    }

    node.type = "paragraph"
    node.children = [gridNode, ...(figcaptionNode ? [figcaptionNode] : [])]
    node.data = {
      hName: "figure",
      hProperties: {
        className: className,
      },
    }
  })
}
