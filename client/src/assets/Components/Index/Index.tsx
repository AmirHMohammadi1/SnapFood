import CateguryHeader from "../CateguryHeader/CateguryHeader";
import MenuMobile from "../MenuMobile/MenuMobile";
import PcIndex from "../PcIndex/PcIndex";
import RestaurantCategories from "../RestaurantCategories/RestaurantCategories";
import RestaurantCategoriesPc from "../RestaurantCategoriesPc/RestaurantCategoriesPc";

export default function Index() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      <div className="px-4">
        <PcIndex />
      </div>
      <div className="">
        <div className="px-4 sm:hidden">
          <CateguryHeader />
        </div>
        <div className="h-2 bg-line "></div>
        <div className=" flex-col flex gap-10">
          <RestaurantCategories />

          <div className="hidden md:block">
            <RestaurantCategoriesPc />
          </div>
        </div>

        <MenuMobile />
      </div>
    </div>
  );
}
