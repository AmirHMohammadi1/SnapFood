import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OtpLogin() {
  const [otp, setOtp] = useState(["", "", "", ""]);
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  const handelChange = (value: string, index: number) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    console.log(newOtp);

    setOtp(newOtp);

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };


  const handelKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }



  const navigatePanelUser = useNavigate()
  const handelrOtp = () => {
    console.log(otp.join(""));
    if (otp.join("").length < 4) {
      alert("سید جان باید 4 رقم کد رو وارد کنید 😐")
    }
    else {
      alert("خوش آومدی سلطان ❤️")
      localStorage.setItem("userRcFood", JSON.stringify("mobin"))

      setTimeout(() => {
        navigatePanelUser("/user-profile")
      }, 1500);
    }



  }
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="px-4 flex flex-col gap-10">
        <div className="flex flex-col gap-5 px-4">
          <svg onClick={() => history.back()} className="w-6 h-6 sm:w-8 sm:h-8">
            <use xlinkHref="#arrow-right"></use>
          </svg>
          <span className="text-[19px] sm:text-2xl">تایید شماره موبایل</span>
          <div className="" >
            <span className="text-[14px] sm:text-[18px] text-gray-600">
              کد ارسال شده به شماره 09123456789 رو وارد کنید.
            </span>
          </div>
        </div>
        <div dir="ltr" className="flex gap-3 justify-center items-center">
          {otp.map((digit: string, index: number) => (
            <input
              className="border-2 border-gray-800 w-13 h-13 rounded-md text-center"
              type="text"
              key={index}
              ref={(el) => {
                inputsRef.current[index] = el;
              }}
              maxLength={1}
              value={digit}
              onKeyDown={(e) => handelKeyDown(e, index)}
              onChange={(e) => handelChange(e.target.value, index)}
            />
          ))}
        </div>
      </div>
      <div className="flex items-end justify-center w-full py-4 px-5 border-t-slate-300 border-t pt-6 ">
        <button onClick={() => handelrOtp()} className={` rounded-md bg-gray-800 text-white w-full py-4`}>
          تایید
        </button>
      </div>
    </div>
  );
}
