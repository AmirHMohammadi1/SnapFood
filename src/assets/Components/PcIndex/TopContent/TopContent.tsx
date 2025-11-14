
export default function LeftContent() {
  return (
    <div className='flex justify-between pl-6'>
      <svg className="w-34 h-34">
        <use xlinkHref="#logo-snap"></use>
      </svg>

      <div className="flex justify-between gap-4 items-center">
        <div className="flex gap-1 items-center">
          <svg className='w-6 h-6'>
            <use xlinkHref='#shop'></use>
          </svg>
          <span className='mt-1 text-gray-600'>ثبت نام فروشندگان</span>
        </div>
        <div className="py-2 px-3 bg-secondry text-white rounded-sm">
          <span>ورود یا عضویت</span>
        </div>
      </div>
      
    </div>
  )
}
