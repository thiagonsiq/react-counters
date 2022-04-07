import './App.css';

import React, { useState } from 'react';

function Button(props) {
    const handleClick = () => props.onClickFunction(props.increment);
    return (
      <button onClick={handleClick}>
        +{props.increment}
      </button>
    );
  }
  
  function Display(props) {
    return (
      <div>
        {props.message}
      </div>
    )
  }
  
  function App() {
    const [counter, setCounter] = useState(0)
    const incrementCounter = (incrementValue) => setCounter(counter+incrementValue);
    return (
      <div className="App">
        <Button onClickFunction={incrementCounter} increment={1} />
        <Button onClickFunction={incrementCounter} increment={5} />
        <Button onClickFunction={incrementCounter} increment={10} />
        <Display message={counter} />
      </div>
    )
  }

export default App;
