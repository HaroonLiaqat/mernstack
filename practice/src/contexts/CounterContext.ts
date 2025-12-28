import { createContext } from "react";

export type CounterContextType = {
  count: number;
  setCount: (count: number) => void;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const CounterContext = createContext<CounterContextType | undefined>(undefined);

export default CounterContext;
