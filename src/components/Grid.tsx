import styled from 'styled-components'
import { Container } from './Container'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import '../index.css'
import Logo from './Logo'
import { mediaHelper } from '../lib/responsive'
import personBg from '../images/person.jpg'
import { ColBlock } from './ColBlock'
import text from '../text.json'
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

export const Layout = () => {
  return (
    <>
      <Grid>
        <div className="column__lake"></div>
        <div className="column__share">
          <ColBlock
            headerText={text.lakeCol.headerText}
            pText={text.lakeCol.pText}
            linkText={text.lakeCol.linkText}
            isGradientBorder={true}
            color="white"
            bg="black"
          />
        </div>
        <div className="column__mac"></div>
        <div className="column__beatiful"></div>
        <div className="column__photo-maker"></div>
        <div className="column__design"></div>
      </Grid>
    </>
  )
}
