import styled from 'styled-components'
import { Arrow } from './Arrow'
import { BrandLogo } from './BrandLogo'
import {
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter
} from 'react-icons/ai'
import { SiPinterest } from 'react-icons/si'
import { Container } from './Container'
import { mediaHelper } from '../lib/responsive'

const FooterWrapper = styled.div`
  background-color: black;
`

const StyledFooter = styled.footer`
  padding: 6rem 0;

  color: white;
  ${mediaHelper().tablet(`
    display: flex;
    justify-content: space-between;
    padding: 3.5rem 0;
  `)}
  .col-1 {
    ${mediaHelper().tablet(`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
  `)}
    .brand-logo {
      ${mediaHelper().tablet(`
        padding: 0;
        margin-bottom: 2.2rem;
        
        `)}
      ${mediaHelper().desktop(`
            margin: 0;
        
        `)}
      h1 {
        font-size: 2.5rem;
        ${mediaHelper().tablet(`
      font-size: 1.28rem;
        
        `)}
      }

      .logo {
        font-size: 2.5rem;
        ${mediaHelper().tablet(`
      font-size: 1.28rem;
        
        `)}
      }

      margin-bottom: 1rem;
    }

    .social-nav {
      ${mediaHelper().tablet(`
    order: 2;
    font-size: 1.1rem;
    margin-top: 4.75rem;
  `)}
      ${mediaHelper().desktop(`
            margin: 0;
        
        `)}
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 1rem;

      font-size: 3rem;
      .youtube {
        display: block;
        background: white;
        padding: 0.35rem;
        ${mediaHelper().tablet(`
        padding: .2rem;
  `)}
        border-radius: 50%;
        svg {
          color: black;
          display: block;
          font-size: 2rem;
          ${mediaHelper().tablet(`
          font-size: .7rem;
  `)}
        }
      }
    }
    .footer-nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      row-gap: 2rem;
      ${mediaHelper().tablet(`
    flex-direction: row;
    margin: 0;
    font-size: .605rem;
    column-gap: 1rem;
    letter-spacing: 3px;
  `)}
      ${mediaHelper().desktop(`
  flex-direction: column;
  align-self: flex-end;
  align-items: start;
  justify-content: center;
  row-gap: 1.25rem;
  margin-right: -6.5rem;
  margin-top: -1.2rem;
    margin-bottom: -1rem;
  `)}
      font-family: 'DM Sans', sans-serif;
      font-size: 1.25rem;
      text-transform: uppercase;
      letter-spacing: 5px;
      margin: 5rem 0;
    }
  }
  .col-2 {
    display: flex;
    flex-direction: column;
    column-gap: 3rem;
    jusfity-center: center;
    align-items: center;
    ${mediaHelper().tablet(`
    justify-content: space-between;
    align-items: flex-end;
  
  `)}
    font-size: 1.5rem;
    .invite {
      display: flex;
      align-items: center;

      text-transform: uppercase;
      letter-spacing: 3px;
      ${mediaHelper().tablet(`
      font-size: .63rem;
      letter-spacing: 3px;
      margin-top: -1rem;
  
  `)}
      .arrow {
        margin-left: 2.5rem;
        font-size: 5rem;
        ${mediaHelper().tablet(`
        font-size: 2.5rem;
        margin-left: 1rem;
  
  `)}
      }
    }
    .copyright {
      color: gray;
      text-transform: capitalize;
      margin-top: 2rem;
      ${mediaHelper().tablet(`
      font-size: .95rem;
  
  `)}
    }
  }
`
export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <StyledFooter>
          <div className="col-1">
            <BrandLogo />
            <nav className="social-nav">
              <AiFillFacebook />
              <span className="youtube">
                <AiFillYoutube />
              </span>
              <AiOutlineTwitter />
              <SiPinterest />
              <AiOutlineInstagram />
            </nav>
            <nav className="footer-nav">
              <a href="">home</a>
              <a href="">stories</a>
              <a href="">features</a>
              <a href="">pricing</a>
            </nav>
          </div>
          <div className="col-2">
            <h3 className="invite">
              get an invite
              <a href="" className="invite__link">
                <Arrow />
              </a>
            </h3>
            <p className="copyright">copyright 2019. All rigths reserved</p>
          </div>
        </StyledFooter>
      </Container>
    </FooterWrapper>
  )
}
