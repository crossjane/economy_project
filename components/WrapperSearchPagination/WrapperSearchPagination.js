"use client";

import Link from "next/link";
import React from "react";
import ReactPaginate from "react-paginate";

function WrapperSearchPagination({ data }) {
  console.log("데이터", data);

  function onPageChange(event) {
    console.log("event :", event);
  }

  return (
    <div className="mt-[30px]">
      {data.data.content.map((economy) => (
        <Link key={economy.id} href={`economy/${economy.id}`}>
          <div className="bg-white w-full min-h-[206px] py-[30px] px-[29px] rounded-2xl shadow-md mb-8">
            <div>
              <span className="text-[14px] font-[500] text-[#a2a2a2] ">
                {economy.createdAt}
              </span>
            </div>
            <div className="mt-[11px]">
              <span className="text-[22px] font-[700] text-[#414141] ">
                {economy.title}
              </span>
            </div>
            <p className="text-[15px] font-[400] text-[#414141] mt-[11px] line-clamp-3">
              {economy.contentWithoutHtml}
            </p>
          </div>
        </Link>
      ))}
      <div className="flex flex-col mb-[30px] justify-center items-center">
        <ReactPaginate
          nextLabel=">"
          className="flex flex-row gap-[10px]"
          onPageChange={onPageChange}
          pageCount={data.data.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
}

export default WrapperSearchPagination;
