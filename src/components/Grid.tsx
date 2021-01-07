import styled from 'styled-components'
import { Container } from './Container'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import '../index.css'
import Logo from './Logo'
import { mediaHelper } from '../lib/responsive'
const Grid = styled.div`
  display: grid;
  align-items: center;

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto repeat(6, 300px);

  .column__logo {
    grid-column: 1 / 11;
    padding: 2rem 0;
    ${mediaHelper().tablet(`
      grid-column: 1 / 5;
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
    grid-column: 11 / 13;
    nav {
      display: none;
    }
    ${mediaHelper().tablet(`
      grid-column: 5 / 13;
      nav {
        display: block;
      }
    `)}
    nav ul {
      display: flex;
      align-items: center;
      a {
        display: inline-block;
        padding: 0.5rem;
        margin: 0 0.6rem;
        text-transform: uppercase;
        font-family: 'DM Sans';
        font-weight: 700;
        font-size: 0.8rem;
        letter-spacing: 2px;
      }
      li:last-child a {
        color: white;
        background: black;
        padding: 0.85rem 1.45rem;
        margin-right: 0;
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
  .column__lake {
    grid-column: 1 / 12;
  }
  .column__share {
    grid-column: 1 / 12;
  }
  .column__mac {
    grid-column: 1 / 12;
  }
  .column__beatiful {
    grid-column: 1 / 12;
  }
  .column__photo-maker {
    grid-column: 1 / 12;
  }
  .column__design {
    grid-column: 1 / 12;
  }
`

export const Layout = () => {
  return (
    <Container>
      <Grid>
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
              <li>
                <a className="link" href="">
                  get an invite
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="column__lake"></div>
        <div className="column__share"></div>
        <div className="column__mac"></div>
        <div className="column__beatiful"></div>
        <div className="column__photo-maker"></div>
        <div className="column__design"></div>
      </Grid>
    </Container>
  )
}
