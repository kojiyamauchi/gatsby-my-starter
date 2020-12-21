/*
  Blog Post Pagenation.
*/

import { Link } from 'gatsby'
import styled from 'styled-components'

type Props = {
  className?: string
  previous: string | null
  next: string | null
}

const BlogPostPagenationComponent: React.VFC<Props> = ({ className, previous, next }): JSX.Element => (
  <ul className={className}>
    {previous && (
      <li className="prev">
        <Link to={`${previous}`} rel="prev" className="prev-link">
          New Post.
        </Link>
      </li>
    )}
    {next && (
      <li className="next">
        <Link to={`${next}`} rel="next" className="next-link">
          Old Post.
        </Link>
      </li>
    )}
  </ul>
)

const StyledComponent = styled(BlogPostPagenationComponent)`
  width: 100%;
  max-width: 500px;
  display: grid;
  grid-template-rows: none;
  grid-template-columns: 50%;
  padding: 0 20px;

  .prev {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    text-align: left;
  }

  .prev-link {
    font-size: 2em;
  }

  .next {
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    text-align: right;
  }

  .next-link {
    font-size: 2em;
  }
`

export const BlogPostPagenation = StyledComponent
