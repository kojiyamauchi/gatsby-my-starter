/*
  Blog List Pagenation.
*/

import { Link } from 'gatsby'
import styled from 'styled-components'

type Props = {
  className?: string
  category?: string
  current: number
  isFirst: boolean
  isLast: boolean
}

const BlogListPagenationComponent: React.VFC<Props> = ({ className, category, current, isFirst, isLast }): JSX.Element => {
  const branches = category ? `/category/${category}/` : `/blog-list/`

  return (
    <ul className={className}>
      {!isFirst && (
        <li className="prev">
          <Link to={current === 2 ? branches : `${branches}${current - 1}/`} rel="prev" className="prev-link">
            New
          </Link>
        </li>
      )}
      {!isLast && (
        <li className="next">
          <Link to={`${branches}${current + 1}/`} rel="next" className="next-link">
            Old
          </Link>
        </li>
      )}
    </ul>
  )
}

const StyledComponent = styled(BlogListPagenationComponent)`
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

export const BlogListPagenation = StyledComponent
