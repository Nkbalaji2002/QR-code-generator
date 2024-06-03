import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const Increment = () => setCount(count + 1);
  const Decrement = () => setCount(count - 1);
  const Reset = () => setCount(0);

  return (
    <>
      <div className="p-4">
        <h1 className="text-2xl font-bold text-center mb-4">Counter App</h1>

        <div className="text-center my-4">
          <h2 className="text-2xl font-bold">Count : {count}</h2>
        </div>

        <div className="flex justify-center">
          <button
            onClick={Increment}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            +
          </button>
          <button
            onClick={Decrement}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            -
          </button>
          <button
            onClick={Reset}
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            0
          </button>
        </div>
      </div>
    </>
  );
};

export default CounterApp;
