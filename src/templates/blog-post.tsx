/*
  Blog Post.
*/

import { graphql } from 'gatsby'
import { SEO } from '@/components/seo'
import { Layout } from '@/components/layout'
import { BlogPostData } from '@/components/Presentations/BlogPostData'
import { BlogPostPagenation } from '@/components/Presentations/BlogPostPagenation'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { PagesStyle } from '@/styles/StyleMixins'
import { BlogPostQuery } from 'graphql-types'

type Props = {
  className?: string
  location: { pathname: string }
  data: BlogPostQuery
  pageContext: {
    id: string
    [key: string]: string | null
  }
}

export const query = graphql`
  query BlogPost($id: [String]!) {
    markdownRemark(id: { in: $id }) {
      html
      frontmatter {
        categories
        date(formatString: "YYYY/MM/DD")
        description
        title
        image {
          id
          childImageSharp {
            gatsbyImageData(quality: 90, placeholder: BLURRED)
          }
        }
      }
    }
  }
`

const BlogPostComponent: React.VFC<Props> = ({ className, location, data, pageContext }): JSX.Element => {
  const image = getImage(data!.markdownRemark!.frontmatter!.image! as ImageDataLike)
  return (
    <Layout>
      <SEO
        title={data?.markdownRemark?.frontmatter?.title || undefined}
        description={data?.markdownRemark?.frontmatter?.description || undefined}
        pagePath={location.pathname}
      />
      <div className={className}>
        <div className="content" dangerouslySetInnerHTML={{ __html: data?.markdownRemark?.html || '' }} />
        <BlogPostData categories={data?.markdownRemark?.frontmatter?.categories} date={data?.markdownRemark?.frontmatter?.date} />
        <GatsbyImage className="img-blog" alt="Blog Image" image={image!} />
        <BlogPostPagenation previous={pageContext.previous} next={pageContext.next} />
      </div>
    </Layout>
  )
}

export default styled(BlogPostComponent)`
  ${PagesStyle}
  padding: 30px 0 20px;

  .content {
    width: 100%;
    text-align: center;

    h1 {
      font-size: 4em;
      margin: 0 0 20px 0;
    }

    p {
      font-size: 3em;
      margin: 0 0 20px 0;
    }
  }

  .img-blog {
    width: 100%;
    max-width: 450px;
    margin: 0 0 20px 0;
  }
`
