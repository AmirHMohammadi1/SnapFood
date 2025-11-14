import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchTopbar() {
  const [searchValue, setSearchValue] = useState<string>("");
  const locationPage = window.location.pathname;

  useEffect(() => {}, []);

  return (
    <div>
      <div className="w-full h-10 bg-primary-2 rounded-md flex items-center  relative">
        {!searchValue && (
          <div className="flex items-center gap-1 text-md pr-3  absolute pointer-events-none">
            <span className="text-slate-500 space-x-11">جستوجو در </span>
            <img
              className="w-20 h-auto"
              src="https://cdn.snappfood.ir/pwa/assets/branding/snappfood_fa_logotype_hor.svg"
              alt=""
            />
          </div>
        )}
        {locationPage == "/search" ? (
          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            className="pr-3 outline-0"
          />
        ) : (
          <Link to="/search" className="w-full h-full"></Link>
        )}

        <svg className="w-7 h-7 absolute left-2 top-[17%]">
          <use href="#search-icon"></use>
        </svg>
      </div>
    </div>
  );
}
