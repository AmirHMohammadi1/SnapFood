
type props = {
  title : string, 
  img : string
}


export default function RestaurantCategoriesPcBoxes({title , img}  : props) {
  return (
    <div className="bg-slate-100 overflow-hidden cursor-pointer relative mmd:w-34 rounded-xl">
        <img className="w-43 h-23 sm:h-20 sm:w-34   object-cover " src={img} alt="" />
        <div className="flex gap-1  absolute py-1 group  bottom-0 items-center bg-white rounded-tl-2xl overflow-hidden w-20 text-[13px] pr-2">
            <span className="text-gray-500">{title}</span>
            <svg className="w-4 h-4 group-hover:mr-1 transition-all  text-secondry">
                <use xlinkHref="#chevron-left"></use>
            </svg>
        </div>
    </div>
  )
}
