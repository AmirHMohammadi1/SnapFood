import { useEffect, useState } from "react";

type ContentSearch = {
  searchValue: string;
};

export default function ContentSearch({ searchValue }: ContentSearch) {
  const [isShowModale, setIsShowModale] = useState<boolean>(false);
  useEffect(() => {
    if (searchValue) {
      setIsShowModale(true);
    }
    setTimeout(() => {
      setIsShowModale(false);
    }, 500);
  }, [searchValue]);

  return (
    <div className="flex flex-col gap-15">
      {searchValue.length >= 1 && (
        <div className="flex gap-3 items-center">
          <div className=" bg-slate-100 w-8 h-8 rounded-full flex items-center justify-center">
            <svg className="w-5 h-5">
              <use xlinkHref="#search-icon"></use>
            </svg>
          </div>
          <span className="text-slate-400">مشاهده همه نتایج :</span>
          <span className="max-w-30 truncate sm:max-w-max mt-1">
            {searchValue}
          </span>
        </div>
      ) }
      {isShowModale && (
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      )}
    </div>
  );
}
