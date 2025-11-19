

type locationName = {
  locationName : string
}

export default function SearchCity({locationName} : locationName) {
  return (
    <div className="py-3 px-3 h-10 absolute top-0 z-[9999]  w-full ">
      <div className="flex gap-5 justify-between bg-white py-3 px-3 rounded-md">
        <div className="flex gap-5 w-full">
          <div className="">
            <span className="border-l-2 border-solid border-l-slate-400 z-10 pl-3">
              تهران
            </span>
          </div>
          <input
            type="text"
            className="outline-0 w-[70%] "
            placeholder="شهر مورد نظر ..."
            value={locationName}
          />
        </div>
        <svg className="w-5 h-5">
          <use xlinkHref="#search-svg "></use>
        </svg>
      </div>
    </div>
  );
}
