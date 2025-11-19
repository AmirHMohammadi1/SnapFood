import Search from "../../SearchTopbarMobile/SearchTopbarMobile";
import PcTopbar from "./PcTopbar/PcTopbar";

export default function LeftContent() {

  return (
    <div className="flex flex-col gap-2">
        <PcTopbar/>
        <Search/>
    </div>
  );
}
