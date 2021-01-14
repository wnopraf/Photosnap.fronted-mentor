import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { mediaHelper } from '../lib/responsive'

const StyledBg = styled.article<{ bg: string; rowInverse: boolean }>`
  grid-column: 1 / 101;

  ${(props) =>
    props.rowInverse
      ? mediaHelper().tablet(`
      
      grid-column: 1 / 35 ;
    `)
      : mediaHelper().tablet(`
    grid-column: 65 / 101 ;
    `)}
  ${(props) =>
    props.rowInverse
      ? mediaHelper().desktop(`
    grid-column: 1 / 42;
    `)
      : mediaHelper().desktop(`grid-column: 58 / 101;`)}
    height: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const ColBg: FunctionComponent<{ bg: string; rowInverse: boolean }> = ({
  bg,
  rowInverse
}) => {
  return <StyledBg bg={bg} rowInverse={rowInverse}></StyledBg>
}
