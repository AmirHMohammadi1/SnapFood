import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import UserProfiles from "../../Components/UserProfiles/UserProfiles";

export default function UserProfile() {
  return (
    <div className="flex flex-col gap-10 pb-20">
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
          <div className=" rounded-md  text-center text-white">
            <button className="bg-btnLogin py-2.5 px-4 rounded-md">
              ورود به حساب کاربری
            </button>
          </div>
        </div>
      </div>
      <div className="h-2 bg-line"></div>
      <UserProfiles/>
      <MenuMobile/>
    </div>
  );
}
