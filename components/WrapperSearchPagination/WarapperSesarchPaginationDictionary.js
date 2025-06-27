"use client";

import React, { useEffect, useState } from "react";
import DictionarySearch from "../DictionarySearch";
import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

function WrapperSearchPaginationDictionary({ data }) {
  console.log("eeee", data);
  const searchParams = useSearchParams();
  const [searchKeywordInput, setSearchKeywordInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (searchParams && searchParams.get("searchKeyword")) {
      setSearchKeywordInput(searchParams.get("searchKeyword"));
    }

    if (searchParams && searchParams.get("page")) {
      setCurrentPage(parseInt(searchParams.get("page"), 10));
    }
  }, [searchParams]);

  function changeKeyword(e) {
    setSearchKeywordInput(e.target.value);
  }

  function onSubmitSearch() {
    router.push(`?searchKeyword=${searchKeywordInput}&page=${currentPage}`);
  }

  function onPageChange(selectedItem) {
    const selectedPage = selectedItem.selected;
    router.push(
      `?searchKeywrod=${searchKeywordInput}&page=${selectedPage + 1}`
    );
  }

  return (
    <>
      <DictionarySearch
        onSubmitSearch={onSubmitSearch}
        changeKeyword={changeKeyword}
        searchKeywordInput={searchKeywordInput}
      />
      <div>
        {data.content.map((content) => (
          <div key={content.id}>{content.word}</div>
        ))}
      </div>
      <ReactPaginate
        nextLabel=">"
        className="flex flex-row gap-[10px]"
        onPageChange={onPageChange}
        pageCount={data.totalPages}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

export default WrapperSearchPaginationDictionary;
