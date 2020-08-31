/*
  Blog Category.
*/

import React from 'react'
import { graphql } from 'gatsby'
import { SEO } from '@/components/seo'
import { Layout } from '@/components/layout'
import { BlogListLink } from '@/components/Presentations/BlogListLink'
import { BlogListPagenation } from '@/components/Presentations/BlogListPagenation'
import styled from 'styled-components'
import { PagesStyle, BreakPoint } from '@/styles/StyleMixins'
import { BlogCategoryQuery } from 'graphql-types'

type Props = {
  className?: string
  location: { pathname: string }
  data: BlogCategoryQuery
  pageContext: {
    category: string
    current: number
    isFirst: boolean
    isLast: boolean
  }
}

export const query = graphql`
  query BlogCategory($ids: [String]!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(filter: { id: { in: $ids } }, sort: { order: DESC, fields: [frontmatter___date] }, skip: $skip, limit: $limit) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
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
  }
`

const BlogCategoryComponent: React.FC<Props> = ({ className, location, data, pageContext }): JSX.Element => (
  <Layout>
    <SEO title="Blog Category Page." description="This is Blog Category Page." pagePath={location.pathname} />
    <div className={className}>
      <h1 className="heading-1">{`Category ${pageContext.category}'s Posts #${pageContext.current}`}</h1>
      <BlogListLink edges={data.allMarkdownRemark.edges} />
      <BlogListPagenation category={pageContext.category} current={pageContext.current} isFirst={pageContext.isFirst} isLast={pageContext.isLast} />
    </div>
  </Layout>
)

export default styled(BlogCategoryComponent)`
  ${PagesStyle}
  padding: 30px 0 20px;

  .heading-1 {
    font-size: 3em;
    margin: 0 0 20px 0;
    ${BreakPoint.largeMobile` font-size: 4em `}
  }
`
