function Class14() {
  const multiply = (x: number, y: number): number => {
    if (y === 1) return x;
    return x + multiply(x, y - 1);
  };

  const powRecursion = (x: number, y: number): number => {
    if (y == 1) return x;
    return x * powRecursion(x, y - 1);
  };

  const powIterative = (x: number, y: number): number => {
    let result = 1;
    for (let i = 0; i < y; i++) {
      result = result * x;
    }
    return result;
  };

  const printRecursionDesc = (n: number): void => {
    if (n === 0) return;
    console.log(n);
    printRecursionDesc(n - 1);
  };

  const printRecursionAsc = (n: number): void => {
    if (n === 0) return;
    printRecursionAsc(n - 1);
    console.log(n);
  };

  const printSumOfFirstN = (n: number): number => {
    if (n === 0) return 0;
    return n + printSumOfFirstN(n - 1);
  };

  return (
    <div>
      <button
        className="bg-pink-600 px-2 py-2 rounded-md ml-6 mt-6 cursor-pointer"
        onClick={() => console.log(multiply(4, 5))}
      >
        <p className="text-white font-semibold">multiply using recursion</p>
      </button>
      <button
        className="bg-pink-600 px-2 py-2 rounded-md ml-6 mt-6 cursor-pointer"
        onClick={() => console.log(powRecursion(2, 5))}
      >
        <p className="text-white font-semibold">power using recursion</p>
      </button>
      <button
        className="bg-pink-600 px-2 py-2 rounded-md ml-6 mt-6 cursor-pointer"
        onClick={() => console.log(powIterative(2, 5))}
      >
        <p className="text-white font-semibold">power using iterative</p>
      </button>
      <button
        className="bg-pink-600 px-2 py-2 rounded-md ml-6 mt-6 cursor-pointer"
        onClick={() => printRecursionDesc(10)}
      >
        <p className="text-white font-semibold">print 10 - 1 using iterative</p>
      </button>
      <button
        className="bg-pink-600 px-2 py-2 rounded-md ml-6 mt-6 cursor-pointer"
        onClick={() => printRecursionAsc(10)}
      >
        <p className="text-white font-semibold">print 1 - 10 using iterative</p>
      </button>
      <button
        className="bg-pink-600 px-2 py-2 rounded-md ml-6 mt-6 cursor-pointer"
        onClick={() => console.log(printSumOfFirstN(5))}
      >
        <p className="text-white font-semibold">print sum using recursion</p>
      </button>
    </div>
  );
}

export default Class14;
