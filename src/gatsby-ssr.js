import React from "react"

exports.onRenderBody = ({setHeadComponents}, pluginOptions) => {
  const className = pluginOptions.className
    ? pluginOptions.className
    : "gatsbyRemarkImagesGrid"

  return setHeadComponents([
    <style key={`gatsby-remark-images-grid`} type="text/css">
      {`
        .${className} {
          ${pluginOptions.margin ? `margin: ${pluginOptions.margin}` : ""};
        }

        .${className}-grid {
          display: grid;
          min-height: 0;
          min-width: 0;
          ${pluginOptions.gridGap ? `grid-gap: ${pluginOptions.gridGap}` : ""};
        }

        .${className}-figcaption {
          text-align: center;
        }
      `}
    </style>,
  ])
}
