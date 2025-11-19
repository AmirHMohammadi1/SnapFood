import React, { useState } from "react";
import Leafleft from "./Leafleft/Leafleft";

type props = {
  setShowModalAddreas: React.Dispatch<React.SetStateAction<boolean>>;
  showModalAddreas: boolean;
};

export default function SelectMap({ showModalAddreas, setShowModalAddreas } : props) {
  const [locationName, setLocationName] = useState<string>("");

  return (
    <div
      className={`${
        showModalAddreas ? "opacity-100 visible h-full" : "opacity-0 invisible"
      } transition-all`}
    >
      <div className={`flex flex-col pt-5 gap-5 z-20 pb-5 bg-white fixed ${showModalAddreas  ? "top-1/2" : "top-2"} transition-all left-1/2 h-[70%] w-[50%] rounded-md -translate-y-1/2 -translate-x-1/2`}>
        <div className="flex flex-col pr-3 gap-5">
          <div onClick={() => setShowModalAddreas(false)} className="cursor-pointer">
            <svg className="w-6 h-6">
              <use href="#x-mark"></use>
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-zinc-800 text-[25px] font-bold">
              انتخاب آدرس
            </span>
            <span className="text-sm text-gray-500">
              برای مشاهده مناسب‌ترین پیشنهادها به شما، ابتدا موقعیتتان را مشخص
              کنید.
            </span>
          </div>
        </div>
        <div className="bg-zinc-200 h-full relative">
          <Leafleft
            setLocationName={setLocationName}
            locationName={locationName}
          />
        </div>
        <div className=" flex items-center justify-center text-white w-full">
          <button onClick={() => setShowModalAddreas(false)} className="bg-secondry px-4 py-3 w-[96%] text-md font-bold cursor-pointer rounded-md">
            <span>تایید</span>
          </button>
        </div>
      </div>
      <div className="fixed transition-all w-full top-0 h-full backdrop-blur-xs right-0 z-5 bg-black/30"></div>
    </div>
  );
}
