import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState<number | string>(0);

  return (
    <div className="flex flex-col justify-between h-full">
      <div className="px-4 flex flex-col gap-5">
        <svg onClick={() => history.back()} className="w-6 h-6 sm:w-8 sm:h-8">
          <use xlinkHref="#arrow-right"></use>
        </svg>
        <span className="text-[19px] sm:text-2xl">ورود به حساب کابری</span>
        <div className="">
          <span className="text-[14px] sm:text-[18px] text-gray-600">
            برای ادامه، شماره موبایل خود را وارد کنید.
          </span>
        </div>
        <div className="flex flex-col gap-3">
          <span className="text-zinc-800 text-sm sm:text-base">شماره موبایل</span>
          <div className="flex justify-between items-center px-4 border-slate-300 border-2 rounded-md ">
            <input
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="w-[70%]  outline-0 h-12 rounded-md"
              type="text"
            />
            <svg className="w-5 h-5">
              <use xlinkHref="#device-phone-mobile"></use>
            </svg>
          </div>
          <div className="flex gap-1 text-slate-600 text-xs sm:text-md">
            <span>با ورود</span>
            <span className="underline border-b-red-500 text-gray-900">
              {" "}
              شرایط و قوانین
            </span>
            <span>استفاده از اسنپ فود را می پذیرم.</span>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-center w-full py-4 px-5 border-t-slate-300 border-t pt-6 ">
        {phoneNumber.toString().length > 3 ? (
          <Link to="/login/otp"  className={` rounded-md text-center bg-gray-800 text-white w-full py-4`}>
            ادامه
          </Link>
        ) : (
          <span className={` rounded-md bg-slate-300 text-center text-white w-full py-4`}>
            ادامه
          </span>
        )}
      </div>
    </div>
  );
}
