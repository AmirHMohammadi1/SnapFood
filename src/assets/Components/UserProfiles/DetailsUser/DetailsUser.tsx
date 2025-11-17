import { Link } from "react-router-dom";

export default function DetailsUser() {
    const localeData = JSON.parse(localStorage.getItem("userRcFood") || "{}");

    return (
        <div>
            {localeData ? (
                <div className="flex mx-3 flex-col gap-10 ">

                    <div className="flex items-center justify-between ">
                        <div className="flex flex-col gap-1 ">
                            <span className="text-gray-800 text-2xl">مبین محمدی</span>
                            <span className="text-slate-400 text-base font-Morabba">09123456789</span>
                        </div>
                        <div className="flex items-center gap-1 text-sky-600">
                            <span >اطلاعات کاربری</span>
                            <svg className="w-4 h-4">
                                <use href="#chevron-left"></use>
                            </svg>
                        </div>
                    </div>
                   
                </div>
            ) : (
                <div className="flex  flex-col gap-5 justify-center items-center ">
                    <div className="">
                        <img
                            className="w-53 h-53"
                            src="https://cdn.snappfood.ir/pwa/assets/illustrations/login.png"
                            alt=""
                        />
                    </div>
                    <div className="flex items-center justify-between gap-5 flex-col">
                        <span className="text-gray-900 text-xl">وارد حساب کاربری شوید</span>
                        <p className="text-base text-center leading-6 max-w-120 text-slate-500">
                            برای استفاده راحت‌تر و امکان ثبت سفارش به حساب کاربری خود وارد شوید
                            یا حساب کاربری ایجاد کنید.
                        </p>
                        <Link to="/login/phone" className=" rounded-md  text-center text-white">
                            <button className="bg-btnLogin py-2.5 px-4 rounded-md">
                                ورود به حساب کاربری
                            </button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    )
}
