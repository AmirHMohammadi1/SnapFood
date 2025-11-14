import SearchTopbar from "../PcIndex/TopContent/SearchTopbar/SearchTopbar";

export default function Search() {
  const locationPage = window.location.pathname;

  return (
    <div>
      <div className="sm:hidden flex gap-5 flex-col ">
        <div className="flex justify-between sm:py-3">
          {locationPage == "/search" ? (
            <div className="flex gap-2 items-center">
              <svg className="w-5 h-5">
                <use href="#arrow-right"></use>
              </svg>
              <span className="max-w-50 truncate">
                جستجو در محصول‌ها‌ و فروشگاه‌ها
              </span>
            </div>
          ) : (
            <>
              <div className=""></div>
              <div className="flex justify-between">
                <div className="flex font-bold bg-secondary-2 text-secondary-3 py-2 px-3 rounded-2xl items-center justify-center text-sm gap-1">
                  <span>انتخاب آدرس</span>
                  <svg className="w-4 h-4">
                    <use href="#chevron-down"></use>
                  </svg>
                </div>
              </div>
            </>
          )}
          <svg className="w-6 h-6">
            <use href="#shope-basket"></use>
          </svg>
        </div>

        <SearchTopbar />
        <div className="w-full h-48">
            <img className="w-full h-full" src="https://cdn.snappfood.ir/500x500/homepage-banners/dakhl/homepage-banners/banner_image-1-2025-11-12-1830.png" alt="" />
        </div>
      </div>{" "}
    </div>
  );
}
