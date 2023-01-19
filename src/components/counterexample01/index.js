import { useState } from 'react';
import React from 'react';

const CounterExample = ({ props }) => {
  //represent state values
  let [counterval, setCounterVal] = useState(0);

  function incrementByOne() {
    console.log('clicked me ', counterval);
    setCounterVal(counterval + 1);
  }
  function decrementByOne() {
    setCounterVal((counterval) => counterval - 1);
  }
  function dncrementByTen() {
    console.log('clicked me ', counterval);
    setCounterVal((x) => x + 10);
  }
  function decrementByTen() {
    setCounterVal((counterval) => counterval - 10);
  }
  function resetCounter() {
    setCounterVal(0);
  }

  return (
    <div style={{ backgroundColor: 'orange' }}>
      <h1> Counter Example</h1>
      <> Counter value is {counterval}</>
      <>
        <h5>Increment by 1</h5>
        <button onClick={incrementByOne}> +1 </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={decrementByOne}> -1 </button>
      </>

      <>
        <h5>Increment by 10</h5>
        <button onClick={dncrementByTen}> +10 </button>
        &nbsp;&nbsp;&nbsp;
        <button onClick={decrementByTen}> -10 </button>
      </>

      <div>
        <button onClick={resetCounter}>Reset Counter</button>
      </div>
    </div>
  );
};

export default CounterExample;
