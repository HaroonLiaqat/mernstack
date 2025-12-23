type Operation = (length: number, width: number) => number | void;

function Class15() {
  const area: Operation = (length, width) => {
    const area = length * width;
    console.log(area);
    // return area;
  };
  console.log("this is class 15");
  return <div onClick={() => area(10, 20)}>Class15</div>;
}

export default Class15;
