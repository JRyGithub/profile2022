import React, { useEffect } from 'react'
import KUTE from 'kute.js';
import styled from 'styled-components';

type Props = {}

const TopBlob = (props: Props) => {
  useEffect(() => {
    KUTE.fromTo('#blob31',
      { path: '#blob31' },
      { path: '#blob32' },
      { repeat: Infinity, duration: 3000, yoyo: true }
    ).start();
  })

  return (
    <TheBlob>

    <Container>
        <Svg
            className="blob-motion"
            id="visual"
            viewBox="-350 0 960 540"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(483.26157507944373 279.3107216448415)">
              <path id="blob31" d="M146.7 -168C170.4 -123 156.2 -61.5 154.9 -1.3C153.6 58.9 165.2 117.9 141.5 158.9C117.9 199.9 58.9 222.9 13.6 209.4C-31.8 195.8 -63.6 145.6 -96.8 104.6C-130 63.6 -164.5 31.8 -166.7 -2.2C-169 -36.3 -138.9 -72.6 -105.8 -117.6C-72.6 -162.6 -36.3 -216.3 12.6 -228.9C61.5 -241.5 123 -213 146.7 -168" fill="#BB004B"></path></g>
            <g transform="translate(509.54377535978017 281.49390864595887)" style={{visibility: "hidden"}}>
              <path
                id="blob32"
                d="M82.9 -27.4C112.3 63.5 144.3 153.1 121.1 170.9C98 188.8 19.6 134.8 -63.3 77C-146.2 19.2 -233.6 -42.6 -223.8 -106.5C-214 -170.5 -107 -236.8 -40.1 -223.7C26.8 -210.7 53.5 -118.4 82.9 -27.4"
                fill="#BB004B"
              ></path>
            </g>
          </Svg>
        </Container>
    </TheBlob>
      );
};
    
export default TopBlob;

const TheBlob = styled.div`
  position: absolute;
  top: 50;
  right: 0;
  z-index: 0;
`
const Container = styled.div`
  height: 100%; 
  width: 100%;
`    
const Svg = styled.svg`
  height: auto;
  width: auto;
  min-height: 400px;
  min-width: 200px;
`