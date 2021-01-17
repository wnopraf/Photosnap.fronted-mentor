import { FunctionComponent } from 'react'
import styled from 'styled-components'

const StyledColGoods = styled.article<{ col: string }>`
  ${(props) => props.col};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 641px;
  background-color: white;
  text-align: center;
  .title {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
  }
  .icon {
    font-size: 9rem;
  }
  .text {
    font-size: 1.8rem;
    padding: 0 6rem;
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
