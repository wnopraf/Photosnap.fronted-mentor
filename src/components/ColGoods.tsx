import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { mediaHelper } from '../lib/responsive'

const StyledColGoods = styled.article<{ col: string }>`
  ${(props) => props.col};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 641px;
  background-color: white;
  text-align: center;
  ${mediaHelper().desktop(`
    padding: 0 2.7rem;
  
  `)}
  .title {
    font-size: 2rem;
    font-weight: 600;
    ${mediaHelper().tablet(`
      font-size: 1.5rem;
    `)}
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  .icon {
    font-size: 9rem;
    margin-bottom: ${140 / 16}rem;
    ${mediaHelper().tablet(`
      margin-bottom: 3.2rem;
    `)}
  }
  .text {
    font-size: 1.8rem;
    ${mediaHelper().tablet(`
      font-size: 1.2rem;
    `)}
    padding: 0 6rem;
    ${mediaHelper().desktop(`
    padding: 0;
  
  `)}
    color: rgb(123 123 123 / 95%);
    line-height: 2;
  }
`

export const ColGoods: FunctionComponent<{
  Icon: FunctionComponent<{ className: string }>
  title: string
  text: string
  col: string
}> = ({ Icon, title, text, col }) => {
  return (
    <StyledColGoods col={col}>
      <Icon className="icon" />
      <h1 className="title">{title}</h1>
      <p className="text">{text}</p>
    </StyledColGoods>
  )
}
