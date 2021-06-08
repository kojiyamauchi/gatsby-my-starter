/*
  Fourth Page.
*/

import { graphql, useStaticQuery } from 'gatsby'
import { SEO } from '@/components/seo'
import { Layout } from '@/components/layout'
import { PageHeading } from '@/components/Presentations/PageHeading'
import styled from 'styled-components'
import { PagesStyle } from '@/styles/StyleMixins'
import BackgroundImage from 'gatsby-background-image'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'

type Props = {
  className?: string
  location: { pathname: string }
}

const FourthPageComponent: React.VFC<Props> = ({ className, location }): JSX.Element => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, placeholder: BLURRED)
          }
        }
      }
    `
  )
  const image = getImage(placeholderImage)
  const bgImage = convertToBgImage(image)

  return (
    <Layout>
      <SEO title="Fourth Page" pagePath={location.pathname} />
      <BackgroundImage Tag="main" className={className} {...bgImage} preserveStackingContext>
        <PageHeading letter="Fourth" className="fourth-page page-heading" />
      </BackgroundImage>
    </Layout>
  )
}

export default styled(FourthPageComponent)`
  ${PagesStyle}
`
