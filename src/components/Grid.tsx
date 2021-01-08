import styled from 'styled-components'
import { Container } from './Container'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import '../index.css'
import Logo from './Logo'
import { mediaHelper } from '../lib/responsive'
import personBg from '../images/person.jpg'

const Grid = styled.div`
  display: grid;
  align-items: center;

  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;

  .column__lake {
    grid-column: 1 / 13;
    height: 589px;
    background-image: url(${personBg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .column__share {
    grid-column: 1 / 13;
    position: relative;
    height: 835px;
    background-color: black;
    &:after {
      content: '';
      position: absolute;
      height: 12px;
      width: 100px;
      top: 0px;
      left: 1rem;
      background-image: linear-gradient(to right, orange, purple 30%);
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
        <div className="column__share"></div>
        <div className="column__mac"></div>
        <div className="column__beatiful"></div>
        <div className="column__photo-maker"></div>
        <div className="column__design"></div>
      </Grid>
    </>
  )
}
