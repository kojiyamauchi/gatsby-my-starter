/*
  Third Page.
*/

import React from 'react'
import { SEO } from '@/components/seo'
import { Layout } from '@/components/layout'
import { PageHeading } from '@/components/Presentations/PageHeading'
import styled from 'styled-components'
import { PagesStyle } from '@/styles/StyleMixins'
import { BackgroundImage } from '@/components/Images/BackgroundImage'

type Props = {
  className?: string
  location: { pathname: string }
}

const ThirdPageComponent: React.FC<Props> = ({ className, location }): JSX.Element => (
  <Layout>
    <SEO title="Third Page" pagePath={location.pathname} />
    <BackgroundImage tag="main" className={className} fileName="logo.png">
      <PageHeading letter="Third" className="third-page page-heading" />
    </BackgroundImage>
  </Layout>
)

export default styled(ThirdPageComponent)`
  ${PagesStyle}
`
