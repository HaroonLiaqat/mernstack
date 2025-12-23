import { useState } from "react";

interface SimpleIncrementProps {
  handleIncrementParent: () => void;
  totalCount: number;
}

function SimpleIncrement({
  handleIncrementParent,
  totalCount,
}: SimpleIncrementProps) {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="bg-blue-600 flex flex-col items-center py-10 px-10 rounded-2xl relative">
      <p className="text-xl font-bold">{count}</p>
      <p className="absolute right-2 top-0">{totalCount}</p>
      <button
        className="px-2 py-1 btn btn-info rounded-xl mt-6"
        onClick={() => {
          setCount((prev) => prev + 1);
          handleIncrementParent();
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default SimpleIncrement;
