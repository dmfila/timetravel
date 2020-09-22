import React, { useEffect } from 'react';
import FlipDown from './flipdown';

import './flipdown.css';
import './App.scss';

function App() {
  useEffect(() => {
    const untilDate = new Date("2020-09-30T00:00:00.000Z").getTime() / 1000;

    new FlipDown(untilDate)
      .start() // Start the countdown
      .ifEnded(() => { // Do something when the countdown ends
        console.log('Time travel is released');
      });
  });

  return (
    <div className="App">
      <div className="counter-wrapper">
        <img src={require('./assets/rocket.gif')} />
        <div id="flipdown" className="flipdown"></div>
      </div>
      <div className="stars"></div>
      <div className="centered">
        <span className="cyberspace" data-text="CYBERSPACE">TIMETRAVEL</span>
      </div>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="extrude">

            <feMorphology operator="erode" radius="0" in="SourceGraphic" result="erode" />
            <feMorphology operator="erode" radius="2" in="SourceGraphic" result="erode1" />
            <feMorphology operator="erode" radius="3" in="SourceGraphic" result="erode2" />
            <feMorphology operator="erode" radius="4" in="SourceGraphic" result="erode3" />
            <feMorphology operator="erode" radius="6" in="SourceGraphic" result="erode4" />
            <feComposite in="erode" in2="erode1" operator="out" result="main" />
            <feComposite in="erode1" in2="erode2" operator="out" result="stroke1" />
            <feComposite in="erode2" in2="erode3" operator="out" result="stroke2" />
            <feComposite in="erode3" in2="erode4" operator="out" result="stroke3" />
            <feGaussianBlur in="stroke1" stdDeviation="0 10" result="stroke1-blur" />
            <feBlend in="stroke1-blur" mode="screen" result="stroke1-blur-blend"></feBlend>
            <feGaussianBlur in="stroke2" stdDeviation="0 10" />
            <feOffset dx="0" dy="10" result="stroke2-blur" />
            <feBlend in="stroke2-blur" mode="screen" result="stroke2-blur-blend"></feBlend>
            <feGaussianBlur in="stroke3" stdDeviation="0 25" />
            <feOffset dx="0" dy="20" result="stroke3-blur" />
            <feBlend in="stroke3-blur" mode="screen" result="stroke3-blur-blend"></feBlend>

            <feFlood result="floodFill" floodColor="rgba(0,0,0,0.7)" floodOpacity="1" />
            <feComposite in="floodFill" in2="erode2" operator="in" result="black" />
            <feBlend in="black" mode="screen" result="letterInside"></feBlend>
            <feMerge>
              <feMergeNode in="stroke1-blur-blend"></feMergeNode>
              <feMergeNode in="stroke2-blur-blend"></feMergeNode>
              <feMergeNode in="stroke3-blur-blend"></feMergeNode>
              <feMergeNode in="main"></feMergeNode>
              <feMergeNode in="letterInside"></feMergeNode>
            </feMerge>

          </filter>
          <filter id="extrude1">

            <feOffset dx="1" dy="3" in="SourceGraphic" result="L1" />
            <feMorphology operator="erode" radius="1" in="L1" result="L2" />
            <feOffset dx="1" dy="10" in="L2" result="L3" />


            <feMerge result="trail">
              <feMergeNode in="L1" />
              <feMergeNode in="L3" />
            </feMerge>
            <feGaussianBlur in="trail" stdDeviation="3 0" result="trail-blur" />
            <feMerge>
              <feMergeNode in="trail-blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div >
  );
}

export default App;
