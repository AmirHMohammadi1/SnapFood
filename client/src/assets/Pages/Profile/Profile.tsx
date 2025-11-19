import { useState } from "react";

export default function Profile() {
  const [isLoader, setIsLoader] = useState<boolean>(false);


  const handlerLoader = () => {
    setIsLoader(true)
    setTimeout(() => {
        setIsLoader(false)
        history.back()
        alert("تغییرات ذخیره شد سید جان 😉")
    }, 1000);

  }

  return (
    <div className="container-custom flex flex-col gap-7 px-3">
      <div className="flex gap-2 items-center">
        <div onClick={() => history.back()} className="cursor-pointer">
          <svg className="w-5 h-5">
            <use xlinkHref="#arrow-right"></use>
          </svg>
        </div>
        <span className="text-base">اطلاعات کاربری</span>
      </div>
      <div className="flex items-center justify-center w-full flex-col gap-3">
        <div className="border-slate-200 flex flex-col gap-1 border-solid border rounded-md px-3 py-2 w-full">
          <label htmlFor="" className="text-slate-400 text-md sm:text-base">
            نام
          </label>
          <input
            className="outline-0 text-zinc-900 text-xs sm:text-md"
            type="text"
            placeholder="مبین"
          />
        </div>
        <div className="border-slate-200 flex flex-col gap-1 border-solid border rounded-md px-3 py-2 w-full">
          <label htmlFor="" className="text-slate-400 text-md sm:text-base">
            نام خانوادگی
          </label>
          <input
            className="outline-0 text-zinc-900 text-xs sm:text-md"
            type="text"
            placeholder="محمدی"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="border-slate-200 flex flex-col gap-1 border-solid border rounded-md px-3 py-2 w-full">
            <label htmlFor="" className="text-slate-400 text-md sm:text-base">
              شماره موبایل
            </label>
            <input
              className="outline-0 text-zinc-900 text-xs sm:text-md"
              type="text"
              placeholder="0912345678"
            />
          </div>
          <span className="text-slate-400 text-x pr-3">
            برای تغییر شماره موبایل با پشتیبانی تماس بگیرید.
          </span>
        </div>
        <div className="border-slate-200 flex flex-col gap-1 border-solid border rounded-md px-3 py-2 w-full">
          <label htmlFor="" className="text-slate-400 text-md sm:text-base">
            ایمیل (اختیاری)
          </label>
          <input
            className="outline-0 text-zinc-900 text-xs sm:text-md"
            type="text"
            placeholder="mobin@gmail.com"
          />
        </div>
        {isLoader ? (
          <div className="bg-gray-800 rounded-md flex w-full items-center justify-center py-2">
            <div className="loader"></div>
          </div>
        ) : (
          <div onClick={() => handlerLoader()} className="w-full bg-sky-700 text-white flex items-center justify-center text-md py-2 rounded-md">
            <button>ذخیره تغییرات</button>
          </div>
        )}
      </div>
    </div>
  );
}
