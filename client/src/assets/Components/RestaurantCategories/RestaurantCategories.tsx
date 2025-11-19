import { useEffect, useRef, useState } from "react";
import CategoriesTitle from "../CategoriesTitle/CategoriesTitle";
import CategoriesBoxes from "./CategoriesBoxesMobile/CategoriesBoxesMobile";
// import CategoriesBoxesPc from "./CategoriesBoxesPc/CategoriesBoxesPc";
// import Slider from "react-slick";
import SliderPc from "../RestaurantCategoriesPc/SliderPc/SliderPc";

export default function RestaurantCategories() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  

  const handleScroll = () => {
    if (scrollRef.current)
      if (scrollRef.current.scrollLeft < 0) {
        console.log("شد ❤");
        setScrolled(true);
      } else {
        setScrolled(false);
        console.log("نشد 😕");
      }
  };
  useEffect(() => {}, []);

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

  const categoriesItemsPc = [
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/restaurant-desktop.png",
      title: "ایرانی",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/supermarket-desktop.png",
      title: "سوپر مارکت",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/cafe-desktop.png",
      title: "کافه",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/confectionary-desktop.png",
      title: "شیرینی",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/fruit-desktop.png",
      title: "میوه",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/protein-desktop.png",
      title: "پروتعین",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/icecream-desktop.png",
      title: "آبیموه و بستنی",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/dairy-desktop.png",
      title: "لبنیات",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/tags/category/diet.png",
      title: "گل و گیاه",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/nuts-desktop.png",
      title: "آجیل",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/coffe-desktop.png",
      title: "قهوه و شکلات ",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/attari-desktop.png",
      title: "عطاری",
    },
    {
      img: "https://cdn.snappfood.ir/uploads/images/review-app/icons/count/organics_desktop_psa.png",
      title: "محصولات طبیعی",
    },
  ];
  return (
    <>
      <div className="bg-white mt-2 pt-4 pr-3 items-center">
        <div className={` flex sm:hidden items-center gap-3`}>
          <div
            className={`${
              !scrolled
                ? "opacity-100 visible rotate-0 "
                : "opacity-0 rotate-45 w-10 overflow-hidden max-w-2 truncate  invisible"
            } transition-md text-center duration-500`}
          >
            <CategoriesTitle title="دسته بندی های رستوران" />
          </div>
          <div
            ref={scrollRef}
            onScroll={() => handleScroll()}
            className={` transition-all flex py-4 gap-2 pl-4  w-full overflow-x-scroll scrollbar-hide`}
          >
            {categoriesItems.map((item) => (
              <CategoriesBoxes {...item} />
            ))}
          </div>
        </div>
      </div>
      <div className=" sm:flex  hidden relative gap-5 py-2 overflow-x-auto px-3 scrollbar-hide whitespace-nowrap">
        <SliderPc data={categoriesItemsPc}/>
   
      </div>
    </>
  );
}
