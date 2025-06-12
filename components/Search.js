"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchKeywordInput, setSearchKeywordInput] = useState("");

  useEffect(() => {
    if (searchParams && searchParams.get("searchKeyword")) {
      setSearchKeywordInput(searchParams.get("searchKeyword"));
    }
  }, [searchParams]);

  function onChange(e) {
    setSearchKeywordInput(e.target.value);
  }

  function onSubmitSearch() {
    router.push(`?searchKeyword=${searchKeywordInput}`);
  }
  return (
    <div className="flex flex-row items-center h-[36px]">
      <input
        className="bg-white border-1 border-[#D1D1D1] rounded-[5px] h-full pl-[12px] "
        placeholder="검색어 입력"
        onChange={onChange}
        value={searchKeywordInput}
      />
      <div
        className="flex justify-center items-center ml-[8px] bg-[#43CD91] pt-[7px] pr-[14px] pb-[7px] pl-[14px] rounded-[5px] h-full cursor-pointer"
        onClick={onSubmitSearch}
      >
        <span className="text-white font-[500] text-[18px]">검색</span>
      </div>
    </div>
  );
};

export default Search;
