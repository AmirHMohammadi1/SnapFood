import CategoriesTitle from "../CategoriesTitle/CategoriesTitle";
import CategoriesBoxes from "./CategoriesBoxes/CategoriesBoxes";

export default function RestaurantCategories() {
  const categoriesItems = [
    {
      img: "https://cdn.snappfood.ir/uploads/images/tags/category/irani.png",
      title: "ایرانی",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/tags/category/fastfood.png",
      title: "فست فود",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/tags/category/kebab.png",
      title: "کباب",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/tags/category/pizza.png",
      title: "پیتزا",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/tags/category/sandwich.png",
      title: "ساندویچ",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/tags/category/sokhari.png",
      title: "سوخاری",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/tags/category/pasta.png",
      title: "پاستا",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/tags/category/salad.png",
      title: "سالاد",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/tags/category/diet.png",
      title: "غذای رژیمی",
    },
    { svg: "#chevron-left", title: "مشاهده بیشتر" },
  ];
  return (
    <div className="bg-white mt-2 pt-4 pr-3 items-center">
      <div className="">
        <CategoriesTitle title="دسته بندی های رستوران" />
        <div className="flex py-4 gap-2 pl-4  w-full overflow-x-scroll scrollbar-hide">
          {categoriesItems.map((item) => (
            <CategoriesBoxes {...item} />
          ))}
         
        </div>
      </div>
    </div>
  );
}
