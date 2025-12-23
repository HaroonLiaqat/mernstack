const FunctionButtons = () => {
  const isVowel = (char: string): boolean => {
    const vowels = ["a", "e", "i", "o", "u"];
    return vowels.includes(char.toLowerCase());
  };

  const countVowels = (str: string): void => {
    let count = 0;
    str.split("").forEach((char: string) => {
      if (isVowel(char)) {
        count++;
      }
    });
    console.log(count);
  };

  const printCharacters = (
    count: number,
    character: string,
    isReverse: boolean = false,
    length?: number
  ): void => {
    if (isReverse) {
      console.log("  ".repeat(length! - count), `${character} `.repeat(count));
    } else {
      console.log(`${character} `.repeat(count));
    }
  };

  const triangle1 = (length: number): void => {
    for (let i = 1; i <= length; i++) {
      printCharacters(i, "*");
    }
    console.log("\n");
  };

  const triangle2 = (length: number): void => {
    for (let i = length; i > 0; i--) {
      printCharacters(i, "*");
    }
    console.log("\n");
  };

  const triangle3 = (length: number): void => {
    for (let i = 1; i <= length; i++) {
      printCharacters(i, "*", true, length);
    }
    console.log("\n");
  };

  const triangle4 = (length: number): void => {
    for (let i = length; i >= 0; i--) {
      printCharacters(i, "*", true, length);
    }
    console.log("\n");
  };

  const printStericTriangle = (length: number): void => {
    triangle1(length);
    triangle2(length);
    triangle3(length);
    triangle4(length);
  };

  const countNumbers = (num: number, ...arr: number[]): void => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        count++;
      }
    }
    console.log(count);
  };

  const doesExist = (num: number, arr: number[]): boolean => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === num) {
        console.log("Yes");
        return true;
      }
    }
    console.log("No");
    return false;
  };

  const findMinimum = (arr: number[]): void => {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    console.log(min);
  };

  const takeAverage = (...n: number[]): void => {
    const sum = n.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    );
    console.log(sum / n.length);
  };
  return (
    <>
      <button
        className="bg-pink-600 px-2 py-2 rounded-md ml-6 mt-6 cursor-pointer"
        onClick={() => countVowels("Haroon")}
      >
        <p className="text-white font-semibold">Count Vowels</p>
      </button>
      <button
        className="bg-pink-600 px-2 py-2 rounded-md ml-6 mt-6 cursor-pointer"
        onClick={() => printStericTriangle(5)}
      >
        <p className="text-white font-semibold">Print Asteric Triangle</p>
      </button>
      <button
        className="bg-pink-600 px-2 py-2 rounded-md ml-6 mt-6 cursor-pointer"
        onClick={() => countNumbers(3, 5, 5, 3, 5, 5)}
      >
        <p className="text-white font-semibold">Count Numbers</p>
      </button>
      <button
        className="bg-pink-600 px-2 py-2 rounded-md ml-6 mt-6 cursor-pointer"
        onClick={() => doesExist(0, [5, 5, 3, 5, 5])}
      >
        <p className="text-white font-semibold">Does Exist</p>
      </button>
      <button
        className="bg-pink-600 px-2 py-2 rounded-md ml-6 mt-6 cursor-pointer"
        onClick={() => findMinimum([5, 5, 3, 5, 5])}
      >
        <p className="text-white font-semibold">Find Minimum</p>
      </button>
      <button
        className="bg-pink-600 px-2 py-2 rounded-md ml-6 mt-6 cursor-pointer"
        onClick={() => takeAverage(5, 5, 3, 5, 5)}
      >
        <p className="text-white font-semibold">Take Average</p>
      </button>
    </>
  );
};

export default FunctionButtons;
