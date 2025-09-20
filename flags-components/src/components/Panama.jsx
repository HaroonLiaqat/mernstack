import React from "react";

const PanamaFlag = () => {
  return (
    <div className="ml-6 mt-6">
      <p className="text-xl font-bold">Panama:</p>
      <div className="h-52 w-80 flex flex-col mt-2 shadow-2xl bg-white">
        <div className="flex flex-1 items-center flex-row">
          <div className="flex flex-1 h-full items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-[#011E56]" />
          </div>
          <div className="flex flex-1 h-full bg-[#DB0914]" />
        </div>
        <div className="flex flex-1 items-center flex-row">
          <div className="flex flex-1 h-full bg-[#011E56]" />
          <div className="flex flex-1 h-full items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-[#DB0914]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanamaFlag;
