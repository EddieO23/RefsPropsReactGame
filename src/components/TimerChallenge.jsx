import React, { useState, useRef } from 'react';
import ResultModal from './ResultModal';

// let timer;

function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function startHandler() {
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open()
    }, targetTime * 1000);
    // The following line will excute right after the timer was set
    setTimerStarted(true);
  }

  function stopHandler() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result='lost' />
      <section className='challenge'>
        <h2>{title}</h2>
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
    </>
  );
}

export default TimerChallenge;
