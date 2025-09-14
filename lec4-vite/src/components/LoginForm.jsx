import React from "react";
import Input from "./Input";
import Button from "./Button";

function LoginForm() {
  return (
    <div className="w-1/4 mx-auto mt-44 rounded-[8px] shadow-2xl overflow-hidden">
      <div className="bg-[#18A085] py-7 flex items-center justify-center">
        <p className="text-3xl text-white font-bold ">Login Form</p>
      </div>
      <div className="p-7">
        <div className="flex flex-col gap-3.5">
          <Input
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                className="size-7"
              >
                <path
                  fillRule="evenodd"
                  d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            placeholder={"Email or Phone"}
          />
          <Input
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#fff"
                className="size-7"
              >
                <path
                  fillRule="evenodd"
                  d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            }
            placeholder={"Password"}
          />
        </div>
        <p className="text-[20px] text-[#18A085] font-medium">
          Forgot Password ?
        </p>
        <div className="flex flex-col gap-3.5 mt-3.5">
          <Button title={"Login"} />
          <div className="flex flex-row items-center self-center">
            <p className="text-[20px]">Not a member ?</p>
            <p className="text-[20px] text-[#18A085] ml-2">Signup now</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
