import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    if (inputRef.current.value) {
      setResult((result) => result + Number(inputRef.current.value));
    }
  }

  function minus(e) {
    e.preventDefault();
    if (inputRef.current.value) {
      setResult((result) => result - Number(inputRef.current.value));
    }
  }

  function times(e) {
    e.preventDefault();
    if (inputRef.current.value) {
      setResult((result) => result * Number(inputRef.current.value));
    }
  }

  function divide(e) {
    e.preventDefault();
    if (inputRef.current.value) {
      setResult((result) => result / Number(inputRef.current.value));
    }
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    setResult(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>+</button>
        <button onClick={minus}>-</button>
        <button onClick={times}>*</button>
        <button onClick={divide}>/</button>
        <button onClick={resetInput}>AC</button>
        <button onClick={resetResult}>C</button>
      </form>
    </div>
  );
}

export default App;
