"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchKeywordInput, setSearchKeywordInput] = useState("");

  // 이 useEffect는 URL에 이미 ?searchKeyword=xxx가 붙어있는 상태로 들어온 경우를 대비한 처리.
  //ex. 다른 사람이 검색 결과 링크를 공유해서 들어오는 경우 검색어 그대로 볼 수 있도록.
  // -> 검색창(input)에 그 값을 자동으로 반영해줘야 좋은 ux
  // 동작과정 약간 헷갈림. 마음에 와닿지 않음. 다시보기

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
