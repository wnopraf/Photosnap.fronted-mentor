import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { mediaHelper } from '../lib/responsive'
import Logo from './Logo'

const StyledBrandLogo = styled.div<{ isDark: boolean }>`
  padding: 2rem 0;

  ${mediaHelper().tablet(`
      
      padding: 1.4rem 0;
    `)}
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    text-transform: uppercase;
    font-family: lato, 'sans serif';
    font-weight: 900;

    margin: 0;
    letter-spacing: 1.5px;
    color: ${(props) => (props.isDark ? 'black' : 'white')};
  }
  .logo {
    margin-right: 0.5rem;
    justify-self: center;
  }
`

export const BrandLogo: FunctionComponent<{ isDark: boolean }> = ({
  isDark = false
}) => {
  return (
    <StyledBrandLogo isDark={isDark} className="brand-logo">
      <Logo />
      <h1>photosnap</h1>
    </StyledBrandLogo>
  )
}
