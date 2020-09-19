import React from "react"
import {graphql} from "gatsby"

export default ({data: {post}}) => {
  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
      <hr />
    </>
  )
}

export const pageQuery = graphql`
  query Post($path: String!) {
    post: markdownRemark(fields: {slug: {eq: $path}}) {
      html
      frontmatter {
        title
      }
    }
  }
`
