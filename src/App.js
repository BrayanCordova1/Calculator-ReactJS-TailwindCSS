import React, { useState } from "react";

function App() {
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    setResult(result + value);
  };

  const handleClearResult = () => {
    setResult("");
  };

  const handleDeleteLast = () => {
    setResult(result.slice(0, -1));
  };

  const handleCalculateResult = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(result.replace(/-/g, "- ")).toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleToggleSign = () => {
    if (result === "") return;

    const lastChar = result.slice(-1);
    if (lastChar === "-") {
      setResult(result.slice(0, -1));
    } else {
      setResult(result + "-");
    }
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-slate-950'>
      <div className='w-80 bg-slate-500 rounded-lg shadow-lg p-6'>
        <input
          type='text'
          value={result}
          className='w-full text-right mb-4 p-2 border border-gray-300 rounded'
          readOnly
        />

        <div className='grid grid-cols-4 gap-2'>
          <button
            className='col-span-2 bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={handleClearResult}>
            C
          </button>
          <button
            className='bg-gray-300 hover:bg-gray-400 focus:bg-gray-400 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={handleDeleteLast}>
            DEL
          </button>
          <button
            className='bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 p-2 rounded text-center text-white font-semibold'
            onClick={() => handleButtonClick("/")}>
            ÷
          </button>

          <button
            className='bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={() => handleButtonClick("7")}>
            7
          </button>
          <button
            className='bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={() => handleButtonClick("8")}>
            8
          </button>
          <button
            className='bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={() => handleButtonClick("9")}>
            9
          </button>
          <button
            className='bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 p-2 rounded text-center text-white font-semibold'
            onClick={() => handleButtonClick("*")}>
            ×
          </button>

          <button
            className='bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={() => handleButtonClick("4")}>
            4
          </button>
          <button
            className='bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={() => handleButtonClick("5")}>
            5
          </button>
          <button
            className='bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={() => handleButtonClick("6")}>
            6
          </button>
          <button
            className='bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 p-2 rounded text-center text-white font-semibold'
            onClick={() => handleButtonClick("-")}>
            -
          </button>

          <button
            className='bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={() => handleButtonClick("1")}>
            1
          </button>
          <button
            className='bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={() => handleButtonClick("2")}>
            2
          </button>
          <button
            className='bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={() => handleButtonClick("3")}>
            3
          </button>
          <button
            className='bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 p-2 rounded text-center text-white font-semibold'
            onClick={() => handleButtonClick("+")}>
            +
          </button>

          <button
            className='bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={handleToggleSign}>
            +/-
          </button>
          <button
            className='bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={() => handleButtonClick("0")}>
            0
          </button>
          <button
            className='bg-gray-200 hover:bg-gray-300 focus:bg-gray-300 p-2 rounded text-center text-gray-800 font-semibold'
            onClick={() => handleButtonClick(".")}>
            .
          </button>
          <button
            className='bg-yellow-400 hover:bg-yellow-500 focus:bg-yellow-500 p-2 rounded text-center text-white font-semibold'
            onClick={handleCalculateResult}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
