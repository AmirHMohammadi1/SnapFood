import CategoriesTitle from "../CategoriesTitle/CategoriesTitle";
import RestaurantCategoriesPcBoxes from "./RestaurantCategoriesPcBoxes/RestaurantCategoriesPcBoxes";

export default function RestaurantCategoriesPc() {
  return (
    <div className="pb-50 flex flex-col gap-5 ">
      <div className="h-2 bg-line "></div>
      <div className="px-4">
        <CategoriesTitle title="دسته بندی ها" />
      </div>
      <div className="px-4">
        <RestaurantCategoriesPcBoxes />
      </div>
    </div>
  );
}
