import { Link } from "react-router-dom";
import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import UserProfiles from "../../Components/UserProfiles/UserProfiles";
import DetailsUser from "../../Components/UserProfiles/DetailsUser/DetailsUser";

export default function UserProfile() {
  return (
    <div className="flex flex-col gap-10 pb-20">
      <DetailsUser/>
      <div className="h-2 bg-line"></div>
      <UserProfiles/>
      <MenuMobile/>
    </div>
  );
}
