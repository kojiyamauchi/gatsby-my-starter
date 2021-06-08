/*
  Blog List Link.
*/

import { Link } from 'gatsby'
import styled from 'styled-components'
import { GatsbyImage, getImage, ImageDataLike } from 'gatsby-plugin-image'
import { BlogListQuery } from 'graphql-types'

type Props = {
  className?: string
  edges: BlogListQuery['allMarkdownRemark']['edges']
}

const BlogListLinkComponent: React.VFC<Props> = ({ className, edges }): JSX.Element => {
  const setLink = (): JSX.Element[] => {
    return edges.map(({ node }) => {
      const image = getImage(node!.frontmatter!.image! as ImageDataLike)
      return (
        <Link className="list-link" to={node?.fields?.slug || ''} key={node?.id}>
          <dl className="post-wrapper">
            <dd className="post-image-wrapper">
              <GatsbyImage className="post-image" alt="Blog Post Image" image={image!} />
            </dd>
            <dt className="post-title">{node?.frontmatter?.title}</dt>
          </dl>
        </Link>
      )
    })
  }

  return <div className={className}>{setLink()}</div>
}

const StyledComponent = styled(BlogListLinkComponent)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .list-link {
    width: 100%;
    max-width: 300px;
    margin: 0 0 20px 0;
  }

  .post-wrapper {
    width: 100%;
  }

  .post-image-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .post-image {
    width: 100%;
    max-width: 300px;
    margin: 0 0 20px 0;
  }

  .post-title {
    width: 100%;
    font-size: 3em;
    text-align: center;
  }
`

export const BlogListLink = StyledComponent
