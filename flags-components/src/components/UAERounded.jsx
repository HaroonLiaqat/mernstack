import React from "react";

const UAERounded = () => {
  return (
    <div className="ml-6 mt-6">
      <p className="text-xl font-bold">UAE:</p>
      <div className="h-52 w-52 mt-2 shadow-2xl flex rounded-full overflow-hidden">
        <div className="flex-1 bg-[#CD1227] h-full" />
        <div className="flex flex-col flex-2">
          <div className="flex-1 bg-[#009E49] h-full" />
          <div className="flex-1 bg-white h-full" />
          <div className="flex-1 bg-black h-full" />
        </div>
      </div>
    </div>
  );
};

export default UAERounded;
