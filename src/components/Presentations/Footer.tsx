/*
  Footer.
*/

import styled from 'styled-components'
import { FlexCenter, BreakPoint } from '@/styles/StyleMixins'

type Props = {
  className?: string
}

const FooterComponent: React.VFC<Props> = ({ className }): JSX.Element => (
  <div className={className}>
    <a href="http://kojiyamauchi.com" target="_blank" rel="noreferrer">
      © {new Date().getFullYear()} All The Small Things, All Rights Reserved.
    </a>
  </div>
)

const StyledComponent = styled(FooterComponent)`
  width: 100%;
  padding: 0 0 20px;
  ${FlexCenter};

  a {
    font-family: Lobster, cursive, 'arial';
    font-size: 1.5em;
    cursor: pointer;
    ${BreakPoint.largeMobile` font-size: 2.4em `}
  }
`

export const Footer = StyledComponent
