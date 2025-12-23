import { useState } from "react";
import SimpleIncrement from "./class18/SimpleIncrement";
import ItemCards from "./class18/ItemCards";
import Fabonacchi from "./class18/Fabonacchi";

function Class18() {
  const [count, setCount] = useState<number>(0);

  const onIncrement = (): void => {
    setCount((prev) => prev + 1);
  };

  return (
    <>
      <Fabonacchi />
      <div className="w-2/3 bg-emerald-700 mx-auto rounded-2xl py-8">
        <h1 className="text-2xl text-center underline p-2">
          Total count: {count}
        </h1>
        <div className="flex flex-row items-center justify-evenly mt-8">
          {new Array(6).fill(0).map((_, index) => (
            <SimpleIncrement
              key={index}
              handleIncrementParent={onIncrement}
              totalCount={count}
            />
          ))}
        </div>
      </div>
      <ItemCards />
    </>
  );
}

export default Class18;
