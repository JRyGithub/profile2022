import React, { useEffect } from 'react'
import KUTE from 'kute.js';
import styled from 'styled-components';

type Props = {}

const LeftTopBlob = (props: Props) => {
  useEffect(() => {
    KUTE.fromTo('#blob35',
      { path: '#blob35' },
      { path: '#blob36' },
      { repeat: Infinity, duration: 3000, yoyo: true }
    ).start();
  })

  return (
    <TheBlob>

    <Container>
        <Svg
            className="blob-motion"
            id="visual"
            viewBox="150 0 1060 640"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            version="1.1"
          >
            <g transform="translate(483.26157507944373 279.3107216448415)">
              <path id="blob35" d="M146.7 -168C170.4 -123 156.2 -61.5 154.9 -1.3C153.6 58.9 165.2 117.9 141.5 158.9C117.9 199.9 58.9 222.9 13.6 209.4C-31.8 195.8 -63.6 145.6 -96.8 104.6C-130 63.6 -164.5 31.8 -166.7 -2.2C-169 -36.3 -138.9 -72.6 -105.8 -117.6C-72.6 -162.6 -36.3 -216.3 12.6 -228.9C61.5 -241.5 123 -213 146.7 -168" fill="#BB004B"></path></g>
            <g transform="translate(509.54377535978017 281.49390864595887)" style={{visibility: "hidden"}}>
              <path
                id="blob36"
                d="M145 -134.2C191 -99 233.5 -49.5 219.4 -14.1C205.2 21.2 134.4 42.4 88.4 98.7C42.4 154.9 21.2 246.2 -22.7 269C-66.7 291.7 -133.4 245.9 -157.9 189.7C-182.4 133.4 -164.7 66.7 -136.3 28.4C-107.9 -9.9 -68.9 -19.9 -44.4 -55.1C-19.9 -90.2 -9.9 -150.6 19.8 -170.4C49.5 -190.2 99 -169.3 145 -134.2"
                fill="#BB004B"
              ></path>
            </g>
          </Svg>
        </Container>
    </TheBlob>
      );
};
    
export default LeftTopBlob;

const TheBlob = styled.div`
  position: absolute;
  top: 0;
  left: 0;
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