import Slider from "react-slick";
// import RestaurantCategoriesPc from "../RestaurantCategoriesPc";
// import RestaurantCategoriesPcBoxes from "../RestaurantCategoriesPcBoxes/RestaurantCategoriesPcBoxes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriesBoxesPc from "../../RestaurantCategories/CategoriesBoxesPc/CategoriesBoxesPc";
import { useRef, useState } from "react";

type Category = {
  title: string;
  img: string;
};

type SliderPcProps = {
  data: Category[];
};

const SliderPc: React.FC<SliderPcProps> = ({ data }) => {
  const sliderRef = useRef<Slider>(null);
  const lengthData = data.length;
  
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    draggable: false,
    slidesToScroll: 3,
    initialSlide: 13,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          initialSlide: lengthData, 
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [slickNum, setSlickNum] = useState<number>();
  const goToSlick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
    setSlickNum(index);
  };

  const backToSlick = (index: number) => {
    sliderRef.current?.slickGoTo(index);
    setSlickNum(index);
  };
  return (
    <div className="slider-container w-full">
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <CategoriesBoxesPc {...item} />
          </div>
        ))}
      </Slider>
      <div
        onClick={() => goToSlick(0)}
        className={`${
          slickNum == 0
            ? "opacity-0 invisible top-full"
            : "opacity-100 visible top-[35%]"
        } transform-3d transition-all absolute top-[35%] left-1 box-shadow duration-500`}
      >
        <div className="inset-0 bg-white p-2  rounded-full border-3 border-sky-700 overflow-hidden flex items-center justify-center text-secondry">
          <div className=" backdrop-blur-md cursor-pointer  rounded-full  flex items-center justify-center">
            <svg className="w-6 h-6">
              <use xlinkHref="#chevron-left"></use>
            </svg>
          </div>
        </div>
      </div>

      <div
        onClick={() => backToSlick(data.length)}
        className={`${
          slickNum == data.length
            ? "opacity-0 invisible top-full"
            : "opacity-100 visible top-[35%]"
        } transition-all duration-500 absolute top-[35%] right-1 box-shadow`}
      >
        <div className="inset-0 bg-white p-2  rounded-full border-3 border-sky-700 overflow-hidden flex items-center justify-center text-secondry">
          <div className=" backdrop-blur-md cursor-pointer  rounded-full  flex items-center justify-center">
            <svg className="w-6 h-6">
              <use xlinkHref="#chevron-right"></use>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderPc;
