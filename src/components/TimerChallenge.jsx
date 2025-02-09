import React, { useState, useRef  } from 'react';

// let timer;


function TimerChallenge({ title, targetTime }) {
  const timer = useRef()

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function startHandler() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
    }, targetTime * 1000);
    // The following line will excute right after the timer was set
    setTimerStarted(true);
  }

function stopHandler() {
  clearTimeout(timer.current)
}

  return (
    <section className='challenge'>
      <h2>{title}</h2>
      {timerExpired && <p>You lost!</p>}
      <p className='challenge-time'>
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerStarted ? stopHandler : startHandler}>
          {timerStarted ? 'Stop' : 'Start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active' : undefined}>
        {timerStarted ? 'Time is running...' : 'Timer is inactive'}
      </p>
    </section>
  );
}

export default TimerChallenge;
