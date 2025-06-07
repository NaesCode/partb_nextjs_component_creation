"use client";
import React, { useState } from 'react';

type CounterProps = {
  initial: number;
  step: number;
};

const Counter: React.FC<CounterProps> = ({ initial, step }) => {
  const [count, setCount] = useState(initial);

  const increment = () => setCount(count + step);
  const decrement = () => setCount(count - step);
  const reset = () => setCount(initial);

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">Counter</h2>
      <p className="text-2xl">{count}</p>
      <div className="flex gap-4">
        <button onClick={increment} className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#50C878] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
          Increment
        </button>
        <button onClick={decrement} className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#F88379] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
          Decrement
        </button>
        <button onClick={reset} className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto">
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;