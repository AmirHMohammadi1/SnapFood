import { Link } from "react-router-dom";

export default function MenuMobile() {
  const menus = [
    { title: "خانه", svg: "#home-svg" , link : "/" },
    { title: "تخفیف روز", svg: "#fair-svg" },
    { title: "سفارش ها", svg: "#paper-svg" },
    { title: "حساب من", svg: "#user-svg", link: "/user-profile" },
  ];

  return (
    <div className="w-full right-0 fixed bg-white border-t-slate-200 border-t-2  bottom-0">
      <div className=" px-9 py-2 ">
        <div className="flex items-center justify-between">
          {menus.map((mnu) => (
            <Link
              to={mnu.link ?? "#"}
              className="flex items-center justify-center flex-col gap-[7px]"
            >
              <svg className="w-6 h-6">
                <use xlinkHref={mnu.svg}></use>
              </svg>
              <span className="text-xs text-slate-400">{mnu.title}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
