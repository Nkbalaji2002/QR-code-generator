import { evaluate } from "mathjs";
import React, { useState } from "react";

const CalculatorApp = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => setInput(input + value);
  const handleClear = () => setInput("");

  const handleCalculate = () => {
    try {
      setInput(evaluate(input).toString());
    } catch (error) {
      console.log("Error : ", error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded shadow-md w-full max-w-xs">
          <div className="mb-4">
            <input
              type="text"
              className="border rounded w-full py-2 px-3 text-gray-700 mb-2 text-right"
              value={input}
              readOnly
            />
            <div className="grid grid-cols-4 gap-2">
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => handleClick("1")}
              >
                1
              </button>
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => handleClick("2")}
              >
                2
              </button>
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => handleClick("3")}
              >
                3
              </button>
              <button
                className="bg-orange-500 p-2 rounded text-white"
                onClick={() => handleClick("+")}
              >
                +
              </button>

              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => handleClick("4")}
              >
                4
              </button>
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => handleClick("5")}
              >
                5
              </button>
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => handleClick("6")}
              >
                6
              </button>
              <button
                className="bg-orange-500 p-2 rounded text-white"
                onClick={() => handleClick("-")}
              >
                -
              </button>

              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => handleClick("7")}
              >
                7
              </button>
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => handleClick("8")}
              >
                8
              </button>
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => handleClick("9")}
              >
                9
              </button>
              <button
                className="bg-orange-500 p-2 rounded text-white"
                onClick={() => handleClick("*")}
              >
                *
              </button>

              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => handleClear()}
              >
                C
              </button>
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => handleClick("0")}
              >
                0
              </button>
              <button
                className="bg-gray-300 p-2 rounded"
                onClick={() => handleCalculate()}
              >
                =
              </button>
              <button
                className="bg-orange-500 p-2 rounded text-white"
                onClick={() => handleClick("/")}
              >
                /
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalculatorApp;
