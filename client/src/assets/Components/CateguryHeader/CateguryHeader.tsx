import CateguryItem from "./CateguryItem/CateguryItem";

export default function CateguryHeader() {
  const items = [
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/service-restaurant.png",
      title: "رستوران",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/service-supermarket.png",
      title: "سوپر مارکت",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/service-cafe.png",
      title: "کافه",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/service-sweet.png",
      title: "شیرینی",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/service-bakery.png",
      title: "نانوایی",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/service-fruit.png",
      title: "میوه",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/service-meat.png",
      title: "پروتئین",
    },
    {
      svg: "#ellipsis-horizontal",
      title: "همه دسته ها",
    },
  ];

  return (
    <div>
      <div className="grid pb-4 bg-white grid-cols-4 gap-2 w-full">
        {items.map((item) => (
          <CateguryItem {...item} />
        ))}
      </div>
    </div>
  );
}
