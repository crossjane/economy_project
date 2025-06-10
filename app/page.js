import Link from "next/link";
import React from "react";

export default async function Home() {
  const response = await fetch("http://43.201.36.186/_api/v1/economy");
  const data = await response.json();
  console.log(data);
  return (
    <div className="flex flex-col px-4">
      {/* 상단카드드 */}
      <div></div>
      {/* 전체뉴스스 */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center">
          <div className="flex-1 ">
            <span className="text-[25px] font-[500] text-[#414141]">
              전체뉴스
            </span>
          </div>
          <div className="flex flex-row items-center h-[36px]">
            <input
              className="bg-white border-1 border-[#D1D1D1] rounded-[5px] h-full pl-[12px] "
              placeholder="검색어 입력"
            ></input>
            <div className="flex justify-center items-center ml-[8px] bg-[#43CD91] pt-[7px] pr-[14px] pb-[7px] pl-[14px] rounded-[5px] h-full">
              <span className="text-white font-[500] text-[18px]">검색</span>
            </div>
          </div>
        </div>
        <div className="mt-[17px]">
          {data.data.content.map((economy) => (
            <Link key={economy.id} href={`economy/${economy.id}`}>
              <div className="bg-white w-full min-h-[206px] py-[30px] px-[29px] rounded-2xl shadow-md">
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
        </div>
      </div>
    </div>
  );
}
