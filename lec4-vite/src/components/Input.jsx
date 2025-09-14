import React from "react";

function Input({ icon, placeholder }) {
  return (
    <div className="h-14 w-full border border-[#18A085] flex items-center rounded-[6px] overflow-hidden">
      <div className="h-14 w-14 bg-[#18A085] flex items-center justify-center">
        {icon}
      </div>
      <input
        placeholder={placeholder}
        className="pl-6 h-full w-full border-none active:border--none text-[18px] font-medium"
      />
    </div>
  );
}

export default Input;
