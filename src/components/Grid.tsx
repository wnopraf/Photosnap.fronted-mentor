import styled from 'styled-components'
import { Container } from './Container'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import '../index.css'
import Logo from './Logo'
import { mediaHelper } from '../lib/responsive'
import personBg from '../images/person.jpg'
import macBg from '../images/mac.jpg'
import cameraBg from '../images/camera.jpg'
import { ColBlock } from './ColBlock'
import text from '../text.json'
import { ColBg } from './ColBg'

const Grid = styled.div`
  display: grid;
  align-items: center;

  grid-template-columns: repeat(100, 1fr);
  grid-template-rows: 592px auto repeat(2,547px auto);
  ${mediaHelper().tablet(`
  grid-template-rows: repeat(3,650px);
  
  
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
          row={`grid-row: 5 / 6;
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
      </Grid>
    </>
  )
}
