import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { mediaHelper } from '../lib/responsive'

const StyledBg = styled.article<{ bg: string; rowPlace?: string }>`
  grid-column: 1 / 101;

  ${mediaHelper().tablet(`
    
      grid-column: 65 / 101;
    `)}
  ${mediaHelper().desktop(`
    grid-column: 42 / 101;
    `)}
    height: 100%;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

export const ColBg: FunctionComponent<{ bg: string; rowPlace?: string }> = ({
  bg
}) => {
  return <StyledBg bg={bg}></StyledBg>
}
