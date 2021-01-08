import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import styled from 'styled-components'
import { mediaHelper } from '../lib/responsive'
import { Container } from './Container'
import Logo from './Logo'

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  ${mediaHelper().tablet(`
    margin: 0 -1rem;
  `)}
  .column__logo {
    padding: 2rem 0;

    ${mediaHelper().tablet(`
      width: 30%;
      padding: 1.4rem 0;
    `)}
    display: flex;
    align-items: center;
    h1 {
      text-transform: uppercase;
      font-family: lato, 'sans serif';
      font-weight: 900;
      font-size: 1.35rem;
      margin: 0;
      letter-spacing: 1.5px;
    }
    .logo {
      margin-right: 0.5rem;
      width: 16px;
      height: 15px;
      justify-self: center;
    }
  }
  .column__nav {
    nav {
      display: none;
    }
    ${mediaHelper().tablet(`
      width: 70%;
      nav {
        display: flex;
      }
    `)}
    nav {
      .link {
        display: inline-block;
        padding: 0.5rem;
        margin: 0 0.6rem;
        text-transform: uppercase;
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 0.8rem;
        letter-spacing: 2px;
      }
      .link-featured {
        color: white;
        background: black;
        padding: 0.85rem 1.45rem;
        ${mediaHelper().desktop(`
            margin-left: auto;
        `)}
      }
      ul {
        display: flex;
        align-items: center;
      }
    }
    justify-self: end;
    button {
      ${mediaHelper().tablet(`
      display: none;
    
    `)}
      font-size: 1.35rem;
      svg {
        display: block;
      }
    }
  }
`

export const Header = () => (
  <Container>
    <StyledHeader>
      <div className="column__logo">
        <Logo />
        <h1>photosnap</h1>
      </div>
      <div className="column__nav">
        <button>
          <HiOutlineMenuAlt4 />
        </button>
        <nav>
          <ul>
            <li>
              <a className="link" href="">
                stories
              </a>
            </li>
            <li>
              <a className="link" href="">
                features
              </a>
            </li>
            <li>
              <a className="link" href="">
                pricing
              </a>
            </li>
          </ul>
          <a className="link link-featured" href="">
            get a invite
          </a>
        </nav>
      </div>
    </StyledHeader>
  </Container>
)
