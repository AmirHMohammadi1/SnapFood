import MenuMobile from "../../Components/MenuMobile/MenuMobile";
import UserProfiles from "../../Components/UserProfiles/UserProfiles";
import DetailsUser from "../../Components/UserProfiles/DetailsUser/DetailsUser";
import { useEffect } from "react";

export default function UserProfile() {
  const localeData = JSON.parse(localStorage.getItem("userRcFood") || "{}")
  useEffect(() => {
    console.log(localeData);
    
  },[localeData])
      console.log(localeData);

  return (
    <div className="flex flex-col gap-10 pb-20">
      <DetailsUser localeData/>
      <div className="h-2 bg-line"></div>
      <UserProfiles localeData />
      <MenuMobile/>
    </div>
  );
}
