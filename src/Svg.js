import React from 'react';
import './Svg.css';


function Svg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 500 500"
      className="svgcircle"
    >
      <defs>
        <path
          id="textcircle"
          d="M50 250c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S50 360.5 50 250"
        >
          <animateTransform
            attributeName="transform"
            begin="0s"
            dur="30s"
            from="0 250 250"
            repeatCount="indefinite"
            to="360 250 250"
            type="rotate"
          ></animateTransform>
        </path>
      </defs>
      
      <text dy="90" textLength="1224">
        <textPath xlinkHref="#textcircle">- SINCE 2016 - SINCE 2016 - SINCE 2016 </textPath>
      </text>

        <foreignObject class="node" x="190" y="165" width="130" height="200">     
          <div className="maintext"><p>FRENCH<br/>TATTOO<br/>ARTIST</p></div>                
        </foreignObject>
      
    </svg>
  );
}


export default Svg;
