
export default function RestaurantCategoriesPcBoxes() {
  return (
    <div className="bg-slate-100 overflow-hidden cursor-pointer relative w-43 rounded-md">
        <img className="w-43 h-23 object-cover " src="https://cdn.snappfood.ir/uploads/images/tags/website_image_irani_1.jpg" alt="" />
        <div className="flex gap-1  absolute py-1 group  bottom-0 items-center bg-white rounded-tl-2xl overflow-hidden w-23 pr-2">
            <span className="text-gray-500">ایرانی</span>
            <svg className="w-4 h-4 group-hover:mr-1 transition-all  text-secondry">
                <use xlinkHref="#chevron-left"></use>
            </svg>
        </div>
    </div>
  )
}
