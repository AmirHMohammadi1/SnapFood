export default function UserProfiles(localeData: any) {
  const navUserProfile = [
    { title: "پشتیبانی", svg: "#support-svg", svgs: "#chevron-left" },
    {
      title: "فعال‌سازی کارت هدیه اسنپ‌فود",
      svg: "#gift-cart",
      svgs: "#arrow-up-left",
    },
    { title: "معرفی فروشگاه", svg: "#market-svg", svgs: "#chevron-left" },
    { title: "ثبت نام فروشگاه", svg: "#add-shop", svgs: "#arrow-up-left" },
  ];
  const logOut = () => {
    localStorage.removeItem("userRcFood");
  };
  return (
    <div>
      {navUserProfile.map((item) => (
        <div className="flex px-4 border-b-2 border-b-slate-100 py-4 items-center w-full gap-1 justify-between">
          <div className="flex items-center w-full gap-3">
            <svg className="w-8 h-8 text-slate-500 ">
              <use xlinkHref={item.svg}></use>
            </svg>
            <div className="">{item.title}</div>
          </div>
          <svg className="w-4.5 h-4.5 text-slate-500">
            <use xlinkHref={item.svgs}></use>
          </svg>
        </div>
      ))}
      {localeData && (
        <div
          onClick={() => logOut()}
          className="flex px-4 border-b-2 text-red-700 border-b-slate-100 py-4 items-center w-full gap-1 "
        >
          <svg className="w-8 h-8 ">
            <use href="#arrow-left-end-on-rectangle"></use>
          </svg>
          <span>خروج از حساب کاربری</span>
        </div>
      )}
      <div className="flex items-center justify-end py-4 px-6">
        <span className="letf-0 text-xs  text-slate-300">
          نسخه برنامه 6.0.0
        </span>
      </div>
    </div>
  );
}
