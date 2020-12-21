/*
  Blog List.
*/

import { graphql } from 'gatsby'
import { SEO } from '@/components/seo'
import { Layout } from '@/components/layout'
import { BlogListLink } from '@/components/Presentations/BlogListLink'
import { BlogListPagenation } from '@/components/Presentations/BlogListPagenation'
import styled from 'styled-components'
import { PagesStyle } from '@/styles/StyleMixins'
import { BlogListQuery } from 'graphql-types'

type Props = {
  className?: string
  location: { pathname: string }
  data: BlogListQuery
  pageContext: {
    current: number
    isFirst: boolean
    isLast: boolean
  }
}

export const query = graphql`
  query BlogList($skip: Int!, $limit: Int!) {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, skip: $skip, limit: $limit) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            image {
              childImageSharp {
                fluid(quality: 90, maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
              id
            }
          }
        }
      }
    }
  }
`

const BlogListComponent: React.VFC<Props> = ({ className, location, data, pageContext }): JSX.Element => (
  <Layout>
    <SEO title="Blog List Page." description="This is Blog List Page." pagePath={location.pathname} />
    <div className={className}>
      <h1 className="heading-1">All Posts #{pageContext.current}</h1>
      <BlogListLink edges={data.allMarkdownRemark.edges} />
      <BlogListPagenation current={pageContext.current} isFirst={pageContext.isFirst} isLast={pageContext.isLast} />
    </div>
  </Layout>
)

export default styled(BlogListComponent)`
  ${PagesStyle}
  padding: 30px 0 20px;

  .heading-1 {
    font-size: 4em;
    margin: 0 0 20px 0;
  }
`
