import React from "react";

type props = {
  setShowModalAddreas: React.Dispatch<React.SetStateAction<boolean>>;
  showModalAddreas: boolean;
};

export default function BottonContent({ setShowModalAddreas }: props) {
  return (
    <div className="relative h-[500px] w-full">
      <div className="flex justify-between h-full  w-full  ">
        <div className="flex flex-col gap-1 pr-6 items-center justify-center">
          <div className="flex flex-col gap-1 ">
            <div className="flex gap-1 & > *:sm:text-[40px]">
              <span className="text-gray-800">سفارش آنلاین</span>
              <span className="text-secondry">غذا</span>
            </div>
            <div className="  ">
              <span className="text-sm text-gray-500">
                سفارش آنلاین غذا ، میوه، نان، شیرینی و ...
              </span>
            </div>
            <div className="mt-5  ">
              <div className="flex  bg-white border-slate-300 border-2  border-solid items-center pr-3 pl-1 py-2 h-14 w-88 justify-between min-h-12 mr-5 rounded-full">
                <div className="flex gap-1 w-[70%]  pl-2 items-center">
                  <svg className="w-5 h-5 text-slate-200 ">
                    <use href="#map-svg"></use>
                  </svg>
                  <input
                    onClick={() => setShowModalAddreas(true)}
                    type="text"
                    className="text-md mt-1 outline-0 w-full border-0"
                    placeholder=" ابتدا آدرستان را انتخاب کنید ..."
                  />
                </div>
                <button className="bg-secondry rounded-full flex items-center justify-center h-12 w-12">
                  <svg className="w-5 h-7 text-white">
                    <use href="#search-svg"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className=" absolute left-0 bottom-0 w-[50%] ">
          <img
            className="h-full w-full max-h-[600px] hidden lg:flex"
            src="/Images/Header/header.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
