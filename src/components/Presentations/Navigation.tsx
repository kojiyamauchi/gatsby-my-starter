/*
  Navigation.
*/

import React from 'react'
import styled from 'styled-components'
import { FlexHorizontalBetween, BreakPoint } from '@/styles/StyleMixins'

type Props = {
  pagenavigation: JSX.Element[]
  className?: string
}

const NavigationComponent: React.FC<Props> = ({ className, pagenavigation }): JSX.Element => <div className={className}>{pagenavigation}</div>

const StyledComponent = styled(NavigationComponent)`
  width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  ${FlexHorizontalBetween}
  ${BreakPoint.largeMobile` width: 60%; `}
  ${BreakPoint.largeMobile` padding: 0; `}

  a {
    font-size: 1.375em;
    ${BreakPoint.largeMobile` font-size: 2.2em `}
  }
`

export const Navigation = StyledComponent
