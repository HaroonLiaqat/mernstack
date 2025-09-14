import React from "react";

function Button({ title }) {
  return (
    <button className="h-14 flex items-center justify-center bg-[#18A085] rounded-[6px]">
      <p className="text-[20px] font-medium text-white">{title}</p>
    </button>
  );
}

export default Button;
