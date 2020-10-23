/*
  Markdown Image
*/

import { CSSProperties } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import GatsbyMarkdownImage, { FluidObject } from 'gatsby-image'
import { MarkdownImageQuery } from 'graphql-types'

type Props = {
  className?: string
  style?: CSSProperties
  alt?: string
  id?: string
}

export const MarkdownImage: React.FC<Props> = ({ className, style, alt, id }): JSX.Element => {
  const { allMarkdownRemark } = useStaticQuery<MarkdownImageQuery>(graphql`
    query MarkdownImage {
      allMarkdownRemark {
        nodes {
          frontmatter {
            image {
              id
              childImageSharp {
                fluid(quality: 90, maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <GatsbyMarkdownImage
      className={className}
      style={style}
      alt={alt}
      /*
        TODO:
        gatsby-image <-> gatsby-plugin-graphql-codeine Too Match Type. gatsby-image/index.d.ts(31, 3)
        Using gatsby-image/index.d.ts
      */
      fluid={
        allMarkdownRemark.nodes.find((info) => info?.frontmatter?.image?.id === id)?.frontmatter?.image?.childImageSharp?.fluid as FluidObject | FluidObject[]
      }
    />
  )
  /* Add Below Code to the Components.
  <MarkdownImage
    className="img-logo"
    alt="ろご"
    style={{ width: '300px', height: '200px', display: 'block' }} // Optional.
    id={data?.markdownRemark?.frontmatter?.image?.id}
  /> */
}
