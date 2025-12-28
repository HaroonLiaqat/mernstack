import { useState } from "react";
import CounterContext from "../contexts/CounterContext";

const CounterProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <CounterContext.Provider
      value={{ count, setCount, increment, decrement, reset }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
