import React, { useEffect } from 'react';
import FlipDown from './flipdown';

import './flipdown.css';
import './App.css';

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
    <div className="App" style={{backgroundImage: `url(${require('./assets/background.jpg')})`}}>
      <div className="counter-wrapper">
        <div id="flipdown" className="flipdown"></div>
      </div>
    </div>
  );
}

export default App;
