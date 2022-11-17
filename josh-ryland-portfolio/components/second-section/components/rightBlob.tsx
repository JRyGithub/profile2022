import React, { useEffect } from 'react'
import KUTE from 'kute.js';
import styled from 'styled-components';

type Props = {}

const RightBlob = (props: Props) => {
  useEffect(() => {
    KUTE.fromTo('#blob3',
      { path: '#blob3' },
      { path: '#blob4' },
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
              <path id="blob3" d="M146.7 -168C170.4 -123 156.2 -61.5 154.9 -1.3C153.6 58.9 165.2 117.9 141.5 158.9C117.9 199.9 58.9 222.9 13.6 209.4C-31.8 195.8 -63.6 145.6 -96.8 104.6C-130 63.6 -164.5 31.8 -166.7 -2.2C-169 -36.3 -138.9 -72.6 -105.8 -117.6C-72.6 -162.6 -36.3 -216.3 12.6 -228.9C61.5 -241.5 123 -213 146.7 -168" fill="#BB004B"></path></g>
            <g transform="translate(509.54377535978017 281.49390864595887)" style={{visibility: "hidden"}}>
              <path
                id="blob4"
                d="M115.4 -137.9C137.9 -92.9 136.4 -46.4 133.6 -2.8C130.8 40.8 126.6 81.6 104.1 118.4C81.6 155.2 40.8 188.1 -8.4 196.5C-57.5 204.8 -115 188.7 -151 151.9C-187 115 -201.5 57.5 -190.8 10.7C-180.1 -36.1 -144.1 -72.1 -108.1 -117.1C-72.1 -162.1 -36.1 -216.1 5.2 -221.2C46.4 -226.4 92.9 -182.9 115.4 -137.9"
                fill="#BB004B"
              ></path>
            </g>
          </Svg>
        </Container>
    </TheBlob>
      );
};
    
export default RightBlob;

const TheBlob = styled.div`
  position: absolute;
  bottom: 0;
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