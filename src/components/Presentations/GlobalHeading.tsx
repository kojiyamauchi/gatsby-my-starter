/*
  Global Heading.
*/
import styled from 'styled-components'
import { FlexCenter, BreakPoint } from '@/styles/StyleMixins'

type Props = {
  letter?: string | null
  className?: string
}

const GlobalHeadingComponent: React.FC<Props> = ({ letter, className }): JSX.Element => (
  <div className={className}>
    <h1>{letter}</h1>
  </div>
)

const StyledComponent = styled(GlobalHeadingComponent)`
  width: 100%;
  margin: 0 0 40px 0;
  ${FlexCenter};

  h1 {
    font-size: 3em;
    ${BreakPoint.largeMobile` font-size: 5.6em `}
  }
`

export const GlobalHeading = StyledComponent
