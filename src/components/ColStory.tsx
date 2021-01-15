import { FunctionComponent } from 'react'
import styled from 'styled-components'
import { mediaHelper } from '../lib/responsive'
import { Arrow } from './Arrow'
import text from '../text.json'

const StyledColStory = styled.article<{ colPlace: string; bg: string }>`
  position: relative;
  grid-column: 1 / 101;
  height: 745px;
  ${mediaHelper().tablet(`
    
    height: 500px;
`)}
  ${(props) => props.colPlace}
  
background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
  .story-summary {
    position: absolute;
    left: 4rem;
    right: 4rem;
    margin-bottom: 2.3rem;
    z-index: 10;
  }
  .story-name {
    padding: 2rem 0;
    border-bottom: 0.5px solid rgb(255 255 255 / 37%);
    .story-name__name {
      font-size: 2rem;

      letter-spacing: 1px;
      margin-bottom: 1rem;
      text-transform: capitalize;
    }
    p {
      font-size: 1.5rem;
      font-weight: 300;
    }
    .story-name__author {
      text-transform: capitalize;
    }
  }
  .story-read {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    .story-read__title  {
      font-size: 1.35rem;
      font-weight: 400;
      text-transform: uppercase;
      letter-spacing: 4px;
    }
    .arrow {
      font-size: 3rem;
    }
  }
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
  }
`

export const ColStory: FunctionComponent<{
  colPlace: string
  bg: string
  name: string
  author: string
}> = ({ colPlace, bg, name, author }) => (
  <StyledColStory colPlace={colPlace} bg={bg}>
    <div className="story-summary">
      <div className="story-name">
        <h1 className="story-name__name">{name}</h1>
        <p>
          {' '}
          by <span className="story-name__author">{author}</span>
        </p>
      </div>
      <p className="story-read">
        <span className="story-read__title">read story</span>
        <Arrow />
      </p>
    </div>
  </StyledColStory>
)
