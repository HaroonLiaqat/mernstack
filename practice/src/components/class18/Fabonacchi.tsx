import React, { useState } from "react";

function Fabonacchi() {
  const [faboIndex, setFaboIndex] = useState<number>();
  const [faboValue, setFaboValue] = useState<number>();
  const findFaboValue = (n: number): number => {
    if (n === 0 || n == 1) return n;
    return findFaboValue(n - 1) + findFaboValue(n - 2);
  };

  const handleFaboValue = () => {
    setFaboValue(findFaboValue(Number(faboIndex)));
  };
  return (
    <div className="my-10">
      <input
        onChange={(n) => setFaboIndex(Number(n?.target?.value))}
        type="number"
      />
      <button className="btn btn-primary" onClick={() => handleFaboValue()}>
        calculate fabonacci value
      </button>
      <p>
        Value on index {faboIndex} in fabonacchi series is :{faboValue}
      </p>
    </div>
  );
}

export default Fabonacchi;
