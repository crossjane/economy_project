"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function DictionarySearch() {
  const searchParams = useSearchParams();
  const [inputKeyword, setInputKeyword] = useState("");
  const [searchKeywordInput, setSearchKeywordInput] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (searchParams && searchParams.get("searchKeyword")) {
      setSearchKeywordInput(searchParams.get("searchKeyword"));
    }
  }, [searchParams]);

  function changeKeyword(e) {
    setInputKeyword(e.target.value);
  }

  function onSubmitSearch() {
    router.push(`?searchKeyword=${inputKeyword}`);
  }

  return (
    <>
      <div className="flex flex-row justify-center items-center mb-20">
        <input
          placeholder="검색어 입력"
          className="bg-white p-2 rounded-md border-1 border-gray-300 w-100"
          onChange={changeKeyword}
          value={inputKeyword}
        ></input>
        <div
          className="m-3 flex flex-row justify-center text-white bg-[#43CD91] w-[100px] rounded-md py-2 cursor-pointer hover:bg-[#30996c]"
          onClick={onSubmitSearch}
        >
          검색
        </div>
      </div>
    </>
  );
}

export default DictionarySearch;
