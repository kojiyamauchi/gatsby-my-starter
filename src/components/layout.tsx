/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { ReactNode } from 'react'

import { HeaderContainer } from '@/components/Managements/HeaderContainer'
import { Footer } from '@/components/Presentations/Footer'
import styled from 'styled-components'
import { GlobalStyle } from '@/styles/StyleGlobal'

type Props = {
  children: ReactNode
  className?: string
}

const LayoutComponent: React.FC<Props> = ({ className, children }): JSX.Element => (
  <div className={className}>
    <GlobalStyle />
    <HeaderContainer />
    {children}
    <Footer />
  </div>
)

const StyledComponent = styled(LayoutComponent)`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
`

export const Layout = StyledComponent
