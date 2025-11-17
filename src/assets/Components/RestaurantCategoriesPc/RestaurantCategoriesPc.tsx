import CategoriesTitle from "../CategoriesTitle/CategoriesTitle";


import "./StyleSlider/StyleSlider.css";

export default function RestaurantCategoriesPc() {
  const DataRestaurantCategoriesPc = [
    {
      title: "ایرانی",
      img: "https://cdn.snappfood.ir/uploads/images/tags/website_image_irani_1.jpg",
    },
    {
      title: "فست فود",
      img: "https://cdn.snappfood.ir/uploads/images/tags/website_image_fastfood_1.jpg",
    },
    {
      title: "کباب",
      img: "https://cdn.snappfood.ir/uploads/images/tags/website_image_kebab_1.jpg",
    },
    {
      title: "پیتزا",
      img: "https://cdn.snappfood.ir/uploads/images/tags/website_image_pizza_1.jpg",
    },
    {
      title: "برگر",
      img: "https://cdn.snappfood.ir/uploads/images/tags/website_image_burger_1.jpg",
    },
    {
      title: "ساندویچ",
      img: "https://cdn.snappfood.ir/uploads/images/tags/website_image_sandwich_1.jpg",
    },
    {
      title: "سوخاری",
      img: "https://cdn.snappfood.ir/uploads/images/tags/website_image_sokhari_1.jpg",
    },
    {
      title: "پاستا",
      img: "https://cdn.snappfood.ir/uploads/images/tags/website_image_italy_1.jpg",
    },
    {
      title: "دریایی",
      img: "https://cdn.snappfood.ir/uploads/images/tags/website_image_seafood_1.jpg",
    },
    {
      title: "بین الملل",
      img: "https://cdn.snappfood.ir/uploads/images/tags/website_image_asian_1.jpg",
    },
    {
      title: "گیلانی",
      img: "https://cdn.snappfood.ir/uploads/images/tags/website_image_gilani_1.jpg",
    },
  ];

  return (
    <div className="pb-50 flex flex-col gap-5 container-custom ">
      <div className="h-2 bg-line "></div>
      <div className="px-4">
        <CategoriesTitle title="دسته بندی ها" />
      </div>
      <div className="px-4 grid grid-2 xs:grid-cols-3 md:grid-cols-4 mmd:grid-cols-5 mmds:grid-cols-6 items-center justify-center gap-6">
        <div className="">.</div>
      </div>
    </div>
  );
}
