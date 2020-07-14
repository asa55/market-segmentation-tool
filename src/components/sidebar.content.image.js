import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const SidebarContentImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "site-icon.png" }) {
        childImageSharp {
          fluid(maxWidth: 512) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
  <div style={{ borderBottom: '2px #222222 solid', marginBottom: '16px', width: '200px' }}>
    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
  </div>
  )
}

export default SidebarContentImage
