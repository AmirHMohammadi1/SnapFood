import { Link } from "react-router-dom";

export default function PcTopbar() {
  return (
<div className="hidden sm:flex justify-between pl-6 items-center min-w-11">
        <svg className="w-24 h-24 sm:w-34 sm:h-34">
          <use xlinkHref="#logo-snap"></use>
        </svg>
        <div className="flex justify-between gap-4 items-center">
          <div className="flex gap-1 items-center">
            <svg className="w-6 h-6">
              <use xlinkHref="#shop"></use>
            </svg>

            <span className="mt-1 text-gray-600 text-sm">
              ثبت نام فروشندگان
            </span>
          </div>
          <div className="py-2 px-3 bg-secondry text-sm text-white rounded-sm">
            <Link to="/login/phone">ورود یا عضویت</Link>
          </div>
        </div>
      </div>  )
}
