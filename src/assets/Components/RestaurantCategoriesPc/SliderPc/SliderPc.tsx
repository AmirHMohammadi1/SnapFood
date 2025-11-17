import Slider from "react-slick";
// import RestaurantCategoriesPc from "../RestaurantCategoriesPc";
// import RestaurantCategoriesPcBoxes from "../RestaurantCategoriesPcBoxes/RestaurantCategoriesPcBoxes";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CategoriesBoxesPc from "../../RestaurantCategories/CategoriesBoxesPc/CategoriesBoxesPc";

type Category = {
  title: string;
  img: string;
};


type SliderPcProps = {
  data: Category[];
};


const SliderPc: React.FC<SliderPcProps> = ({ data }) => {


  const lengthData = data.length
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    initialSlide: lengthData,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          initialSlide: 0, // حتماً این هم اضافه شود
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
  return (
    <div dir="rtl" className="slider-container w-full">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <CategoriesBoxesPc {...item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderPc;
