type CateguryItem = {
  img?: string;
  svg?: string;
  title: string;
};

export default function CateguryItem({ img, title, svg }: CateguryItem) {
  return (
    <div className="flex cursor-pointer rounded-sm py-3 flex-col bg-item items-center justify-center">
      {svg ? (
        <div className="h-15 flex items-center justify-center">
          <svg className="w-15 h-10">
            <use xlinkHref={svg}></use>
          </svg>
        </div>
      ) : (
        <img className="w-15 " src={img} alt="" />
      )}
      <span className="text-xs leading-[1.23rem]">{title}</span>
    </div>
  );
}
