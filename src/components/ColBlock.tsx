import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { mediaHelper } from '../lib/responsive'
import { Arrow } from './Arrow'

const StyledColBlock = styled.article<{
  isGradientBorder: boolean
}>`
  width: 60%;

  margin-left: 4rem;
  padding: 3rem 0;
  ${mediaHelper().tablet(`
    width: auto;
    margin-left: 0;
    padding: 0 4rem;
    position: relative;
`)}
  ${mediaHelper().lageDesktop(`
padding: 0 5rem;
`)}
  ${(props) =>
    props.isGradientBorder
      ? `&:before {
    content: '';
    position: absolute;
    height: 12px;
    width: 250px;
    top: 0px;
    left: 4rem;
    background-image: linear-gradient(
      to right,
      #f1a35d,
      #ff7676 20%,
      #7979f7 45%
    );
    ${mediaHelper().tablet(`
    content: '';
    position: absolute;
    height: 100%;
    width: 7px;
    top: 0;
    left: 0;
    background-image: linear-gradient( #7979f7 ,40%, #f29a9a , #ffddbf );
    
    `)}
  }`
      : ''}
  h1 {
    font-size: 2.9rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    ${mediaHelper().tablet(`
  font-size: 2rem;
  `)}
    ${mediaHelper().lageDesktop(`
font-size: 2.5rem;
`)}
  }

  p {
    line-height: 2;
    color: gray;
    margin: 2rem 0;
    font-size: 1.45rem;
    ${mediaHelper().tablet(`
  line-height: 1.85;
  color: gray;
  margin: 1.35rem 0;
  font-size: 1.05rem;
  
  `)}
  }

  h3 {
    font-size: 1.3rem;
    ${mediaHelper().tablet(`
    font-size: .8rem;

    `)}
    display: flex;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 5px;
    .arrow {
      display: inline-block;
      margin-left: 2rem;
      svg {
        ${mediaHelper().tablet(`
        width: 50px;
    
        `)}
      }
    }
  }
`

export const ColBlock: FunctionComponent<{
  headerText: string
  pText: string
  linkText: string

  isGradientBorder: boolean
}> = ({ headerText, pText, linkText, isGradientBorder }) => (
  <StyledColBlock isGradientBorder={isGradientBorder}>
    <h1>{headerText}</h1>
    <p>{pText}</p>
    <h3>
      <a href="">{linkText}</a>{' '}
      <span className="arrow">
        <Arrow />
      </span>
    </h3>
  </StyledColBlock>
)
