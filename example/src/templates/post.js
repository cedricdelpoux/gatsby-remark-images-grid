import {graphql} from "gatsby"
import React from "react"

const Post = ({data: {post}}) => {
  return (
    <>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: post.html}} />
      <hr />
    </>
  )
}

export default Post

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
