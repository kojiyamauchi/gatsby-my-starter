/*
  Pages Heading.
*/

import React from 'react'
import styled from 'styled-components'
import { PagesHeading } from '@/styles/StyleMixins'

type Props = {
  letter: string
  className?: string
}

const PageHeadingComponent: React.FC<Props> = ({ letter, className }): JSX.Element => (
  <div className={className}>
    <h2 className={className}>This is {letter} Page.</h2>
  </div>
)

const StyledComponent = styled(PageHeadingComponent)`
  ${PagesHeading}
`

export const PageHeading = StyledComponent
