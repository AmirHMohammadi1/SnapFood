
export default function MenuMobile() {

    const menus = [
        {title : "خانه" , svg : "#home-svg"},
        {title : "تخفیف روز" , svg : "#fair-svg"},
        {title : "سفارش ها" , svg : "#paper-svg"},
        {title : "حساب من" , svg : "#user-svg"},
    ]

  return (
    <div className="flex items-center justify-between">
        {menus.map(mnu => (

      <div className="flex items-center justify-center flex-col gap-[7px]" >
        <svg className="w-6 h-6">
          <use xlinkHref={mnu.svg}></use>
        </svg>
        <span className="text-xs text-slate-400">{mnu.title}</span>
      </div>
        ))}
 
    </div>
  );
}
