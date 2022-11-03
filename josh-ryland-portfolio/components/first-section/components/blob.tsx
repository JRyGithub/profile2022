import React, { useEffect } from 'react';
import KUTE from 'kute.js';

const Blob = () => {

  useEffect(() => {
    KUTE.fromTo('.blob1',
      { path: '.blob1' },
      { path: '.blob2' },
      { repeat: Infinity, duration: 3000, yoyo: true }
    ).start();
  })

  return (
    <div>
      <svg preserveAspectRatio="xMidYMid meet" id="visual" viewBox="0 0 960 540" width="1500" height="900" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1">
        <g transform="translate(480.4098832002521 307.5304351656391)">
          <path className="blob1" d="M121 -148.2C161.1 -110.6 200.7 -76.5 199.8 -41.2C198.9 -5.9 157.5 30.5 127.9 66.4C98.3 102.3 80.6 137.6 55.5 142.3C30.4 147 -2.1 121.1 -51.6 114.8C-101 108.4 -167.4 121.7 -190.5 100.8C-213.7 79.8 -193.5 24.6 -165.8 -11.3C-138 -47.2 -102.8 -63.8 -73.9 -103.4C-45 -143 -22.5 -205.5 9 -216.2C40.5 -226.9 81 -185.9 121 -148.2" fill="#0066FF"></path>
        </g>
      <g transform="translate(445.6875211280334 259.625602008545)"  style={{visibility: "hidden"}}>
        <path className="blob2" d="M100.7 -125.5C127.3 -97.7 143.4 -62.9 163.9 -18.3C184.3 26.2 209.1 80.6 195.8 121.8C182.4 163 131.1 191 79.3 203.5C27.6 216.1 -24.5 213.3 -59.3 189.2C-94.1 165.2 -111.6 119.8 -115.4 81.8C-119.3 43.8 -109.5 13.1 -115 -31.5C-120.5 -76.1 -141.2 -134.6 -124.6 -164.1C-108 -193.7 -54 -194.3 -8.5 -184.3C37.1 -174.2 74.1 -153.4 100.7 -125.5" fill="#0066FF"></path>
      </g>
    </svg>

    </div>

  );
};

export default Blob;
