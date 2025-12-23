import React from "react";

const PalestineFlag = () => {
  return (
    <div className="ml-6 mt-6">
      <p className="text-xl font-bold">Palestine:</p>
      <div className="h-52 w-80 flex flex-col mt-2 shadow-2xl overflow-hidden relative">
        <div className="flex-1 bg-black h-full" />
        <div className="flex-1 bg-white h-full" />
        <div className="flex-1 bg-[#039743] h-full" />
        <div className="absolute h-52 w-52 rotate-45 bg-[#EE2A36] -ml-36"></div>
      </div>
    </div>
  );
};

export default PalestineFlag;
