export default function Profile() {
  return (
    <div className="container-custom">
      <div className="flex gap-5 items-center">
        <div onClick={() => history.back()} className="">
          <svg className="w-6 h-6">
            <use xlinkHref="#arrow-right"></use>
          </svg>
        </div>
        <span className="text-base">اطلاعات کاربری</span>
      </div>
      <div className=""></div>
    </div>
  );
}
