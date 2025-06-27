"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

function DictionarySearch({
  onSubmitSearch,
  changeKeyword,
  searchKeywordInput,
}) {
  return (
    <>
      <div className="flex flex-row justify-center items-center mb-20">
        <input
          placeholder="검색어 입력"
          className="bg-white p-2 rounded-md border-1 border-gray-300 w-100"
          onChange={changeKeyword}
          value={searchKeywordInput}
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
