import React from 'react'

import Triangle from '../images/triangle-logo.svg'

export default () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="1em"
      height="1em"
      viewBox="0 0 35 32"
      className="logo"
    >
      <defs>
        <style>{`.bg-gradient{fill:url(#a);}`}</style>
        <linearGradient
          id="a"
          x1="0.762"
          y1="0.597"
          x2="0.223"
          y2="1.397"
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0" stop-color="#a7a7ed" />
          <stop offset="0.284" stop-color="#cb8165" />
          <stop offset="0.931" stop-color="#d0a961" />
          <stop offset="1" stop-color="gray" />
        </linearGradient>
      </defs>
      <path className="bg-gradient" d="M17.5,0,35,32H0Z" />
    </svg>
  )
}
