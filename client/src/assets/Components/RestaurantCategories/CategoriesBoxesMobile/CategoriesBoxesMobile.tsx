
type CategoriesProps = {
  img?: string;
  title: string;
  svg?: string;
};
export default function CategoriesBoxes({ img, title, svg }: CategoriesProps) {
  return (
    <>
      {svg ? (
        <div className="flex items-center min-w-[120px]  gap-0.5 justify-center">
            <span className="text-xs">مشاهده همه</span>
          <svg className="w-5 h-5">
            <use xlinkHref={svg}></use>
          </svg>
        </div>
      ) : (
        <div className="min-w-[104px] py-3 rounded-md bg-item min-h-[104px] flex items-center flex-col  justify-center">
          <img src={img} alt="" />
          <span className="text-xs">{title}</span>
        </div>
      )}
    </>
  );
}
