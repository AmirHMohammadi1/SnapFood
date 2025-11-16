

type propsItem = {
  title : string,
  img : string
}

export default function CategoriesBoxesPc({img , title} : propsItem) {


  return (
    <div className="flex flex-col py-2  cursor-pointer w-24 px-3 ring-2 ring-gray-300 shrink-0 
     gap-2 items-center bg-item rounded-md">
        <img className="" src={img} alt="" />
        <span className="text-sm text-center">{title}</span>
    </div>
  )
}
