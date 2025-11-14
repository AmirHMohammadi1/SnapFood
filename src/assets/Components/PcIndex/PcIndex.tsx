import { useState } from "react";
import BottonContent from "./BottonContent/BottonContent";
import TopContent from "./TopContent/TopContent";
import SelectMap from "../Index/SelectMap/SelectMap";

export default function PcIndex() {
  const [showModalAddreas, setShowModalAddreas] = useState<boolean>(false);
  return (
    <div className=" bg-white sm:bg-primary-2  w-full  ">
      <div className="flex justify-between sm:pr-8 flex-col  sm:h-155">
        <TopContent />
        <div className="sm:flex hidden">
          <BottonContent
            showModalAddreas={showModalAddreas}
            setShowModalAddreas={setShowModalAddreas}
          />

          <SelectMap
            showModalAddreas={showModalAddreas}
            setShowModalAddreas={setShowModalAddreas}
          />
        </div>
      </div>
    </div>
  );
}
