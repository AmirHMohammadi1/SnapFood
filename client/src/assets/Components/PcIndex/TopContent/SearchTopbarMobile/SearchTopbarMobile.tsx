import { useEffect, useState } from "react";
import TopbarSearch from "./TopbarSearch/TopbarSearch";
import ContentSearch from "./ContentSearch/ContentSearch";


export default function SearchTopbar() {
  const [searchValue, setSearchValue] = useState<string>("");
  const locationPage = window.location.pathname;

  useEffect(() => {}, []);
  // ======================= Props =======================

  const TopbarSearchProps = {
    searchValue,
    locationPage,
    setSearchValue,
  };

  const contentSearchProps = {
    searchValue
  }

  // ======================================================

  return (
    <div className="flex flex-col gap-5">
      <TopbarSearch {...TopbarSearchProps} />
      <ContentSearch {...contentSearchProps}/>
    </div>
  );
}
