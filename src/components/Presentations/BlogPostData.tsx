/*
  Blog Post Data.
*/

import { Link } from 'gatsby'
import styled from 'styled-components'

type Props = {
  className?: string
  categories?: (string | null)[] | null
  date: string
}

const BlogPostDataComponent: React.FC<Props> = ({ className, categories, date }): JSX.Element => (
  <ul className={`${className} list`}>
    <li className="category">
      {categories?.map((info, index) => (
        <Link to={`/category/${info}/`} key={index} className="category-link">
          {info}.
        </Link>
      ))}
    </li>
    <li className="date">{date}</li>
  </ul>
)

const StyledComponent = styled(BlogPostDataComponent)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 20px 0;

  .category {
    margin: 0 20px 0 0;
  }

  .category-link {
    font-size: 2em;
    display: inline-block;
    margin: 0 5px 0 0;

    &:last-of-type {
      margin: 0;
    }
  }

  .date {
    font-size: 2em;
    margin: 0 0 0 20px 0;
  }
`

export const BlogPostData = StyledComponent
