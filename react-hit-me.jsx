import React, { useState, useRef } from 'react';

const HIT_ME = 'Hit Me';

export function App(props) {
  const [label, setLabel] = useState(HIT_ME);
  const ref = useRef({
    count: 0,
    intervalId: 0,
  });

  const tick = () => {
    const { current } = ref;

    if (current.count === 0) {
      stopTimer();
    } else {
      --current.count;
    }

    updateState();
  };

  const click = () => {
    const { current } = ref;

    stopTimer();
    current.intervalId = setInterval(tick, 1000);
    current.count = 10;

    updateState();
  };

  const stopTimer = () => {
    const { current } = ref;

    if (current.intervalId) {
      clearInterval(current.intervalId);
      current.intervalId = 0;
    }
  };

  const updateState = () => {
    const { count } = ref.current;
    setLabel(count <= 0 ? HIT_ME : count.toString());
  };

  return (
    <div className='main hit-me' onClick={click}>
      {count || label}
    </div>
  );
}
