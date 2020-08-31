/*
  Header.
*/

import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { GlobalHeading } from '@/components/Presentations/GlobalHeading'
import { Navigation } from '@/components/Presentations/Navigation'
import styled from 'styled-components'
import { FlexCenter } from '@/styles/StyleMixins'
import { HeaderQuery } from 'graphql-types'

type Props = {
  className?: string
}

const HeaderComponent: React.FC<Props> = ({ className }): JSX.Element => {
  const data = useStaticQuery<HeaderQuery>(graphql`
    query Header {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const nav = [
    { path: '/', letter: 'Primary Page', id: 1 },
    { path: '/secondary-page', letter: 'Secondary Page', id: 2 },
    { path: '/third-page', letter: 'Third Page', id: 3 },
    { path: '/blog-list', letter: 'Blog Page', id: 4 }
  ]

  const setList = (): JSX.Element[] => {
    return nav.map(
      (info): JSX.Element => (
        <Link key={info.id} to={`${info.path}`}>
          {info.letter}
        </Link>
      )
    )
  }

  return (
    <div className={className}>
      <GlobalHeading letter={data.site?.siteMetadata?.title} />
      <Navigation pagenavigation={setList()} />
    </div>
  )
}

const StyledComponent = styled(HeaderComponent)`
  width: 100%;
  flex-direction: column;
  ${FlexCenter};
`

export const Header = StyledComponent
