import styled from 'styled-components'
import { Container } from './Container'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import '../index.css'
import Logo from './Logo'
import { mediaHelper } from '../lib/responsive'
import personBg from '../images/person.jpg'
import macBg from '../images/mac.jpg'
import cameraBg from '../images/camera.jpg'
import mountain from '../images/mountain.jpg'
import walker from '../images/walker.jpg'
import tower from '../images/tower.jpg'

import city from '../images/city.jpg'
import { ColBlock } from './ColBlock'
import text from '../text.json'
import { ColBg } from './ColBg'
import { ColStory } from './ColStory'

const Grid = styled.div`
  display: grid;
  align-items: center;

  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: 592px auto repeat(2,547px auto); 
  ${mediaHelper().tablet(`
  grid-template-rows: repeat(3,650px) 
  `)}
  .column__lake {
    grid-column: 1 / 101;
    grid-row: 1 / 2;
    ${mediaHelper().tablet(`
    
      grid-column: 65 / 101;
    `)}
    ${mediaHelper().desktop(`
    grid-column: 42 / 101;
    `)}
    height: 100%;
    background-image: url(${personBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .column__share {
    grid-column: 1 / 101;
    grid-row: 2 / 3;
    ${mediaHelper().tablet(`
    
      grid-column: 1 / 65;
      grid-row: 1 / 2;
    `)}
    ${mediaHelper().desktop(`
    grid-column: 1 / 42;
    `)}
    display: flex;
    align-items: center;
    position: relative;
    height: 100%;
    background-color: black;
    padding: 8rem 0;
    
}


    }
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
const ColWrapper = styled.div<{
  row: string
  bgColor: string
  fontColor: string
  rowInverse: boolean
}>`
  grid-column: 1 / 101;
  ${(props) => props.row}
  ${(props) =>
    props.rowInverse
      ? mediaHelper().tablet(`
    
      grid-column: 35 / 101;
      
    `)
      : mediaHelper().tablet(`grid-column: 1 / 65;`)}
    ${(props) =>
    props.rowInverse
      ? mediaHelper().desktop(`
    grid-column: 42 / 101;
    `)
      : mediaHelper().desktop('grid-column: 1 / 58;')}
    display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.bgColor};
  padding: 8rem 0;
`
export const Layout = () => {
  return (
    <>
      <Grid>
        <ColBg bg={personBg} rowInverse={false} />
        <ColWrapper
          row={`grid-row: 2 / 3;
    ${mediaHelper().tablet(`
      grid-row: 1 / 2;
    `)}`}
          rowInverse={false}
          bgColor="black"
          fontColor="white"
        >
          <ColBlock
            headerText={text.lakeCol.headerText}
            pText={text.lakeCol.pText}
            linkText={text.lakeCol.linkText}
            isGradientBorder={true}
          />
        </ColWrapper>

        <ColBg bg={macBg} rowInverse={true} />
        <ColWrapper
          row={`grid-row: 4 / 5;
    ${mediaHelper().tablet(`
      grid-row: 2 / 3;
    `)}`}
          rowInverse={true}
          bgColor="white"
          fontColor="black"
        >
          <ColBlock
            headerText={text.macCol.headerText}
            pText={text.macCol.pText}
            linkText={text.macCol.linkText}
            isGradientBorder={false}
          />
        </ColWrapper>
        <ColBg bg={cameraBg} rowInverse={false} />
        <ColWrapper
          row={`grid-row: 6 / 7;
    ${mediaHelper().tablet(`
      grid-row: 3 / 4;
    `)}`}
          rowInverse={false}
          bgColor="white"
          fontColor="black"
        >
          <ColBlock
            headerText={text.cameraCol.headerText}
            pText={text.cameraCol.pText}
            linkText={text.cameraCol.linkText}
            isGradientBorder={false}
          />
        </ColWrapper>
        <ColStory
          bg={mountain}
          colPlace={`${mediaHelper().tablet(`
        grid-column: 1 / 50;
        
        `)}
        ${mediaHelper().desktop(`
          grid-column: 1 / 25;
        `)}`}
          name={text.storyColMountain.name}
          author={text.storyColMountain.author}
        />
        <ColStory
          bg={city}
          colPlace={`${mediaHelper().tablet(`
        grid-column: 50 / 101;
        
        `)}
        ${mediaHelper().desktop(`
          grid-column: 25 / 50;
        `)}`}
          name={text.storyColCity.name}
          author={text.storyColCity.author}
        />
        <ColStory
          bg={walker}
          colPlace={`${mediaHelper().tablet(`
        grid-column: 1 / 50;
        
        `)}
        ${mediaHelper().desktop(`
          grid-column: 50 / 75;
        `)}`}
          name={text.storyColWalker.name}
          author={text.storyColWalker.author}
        />
        <ColStory
          bg={tower}
          colPlace={`${mediaHelper().tablet(`
        grid-column: 50 / 101;
        
        `)}
        ${mediaHelper().desktop(`
          grid-column: 75 / 101;
        `)}`}
          name={text.storyColBuilding.name}
          author={text.storyColBuilding.author}
        />
      </Grid>
    </>
  )
}
