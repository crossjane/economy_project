import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Home() {
  const response = await fetch("http://43.201.36.186/_api/v1/economy");
  const data = await response.json();
  console.log(data);
  return (
    <div className="flex flex-col px-4">
      {/* 헤더*/}
      <div className="flex justify-end mt-12">
        <Image
          src="/btn_사전.svg"
          alt="dictionary_btn"
          width={130}
          height={100}
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-col items-center mt-17">
        <span className="text-[20px] font-[500] text-[#43CD91]">
          코후비 선정
        </span>
        <span className="text-[30px] font-[700] text-[#414141] mt-1">
          이 주의 경제 뉴스
        </span>
      </div>
      {/* 상단 카드*/}
      <div className="flex flex-row items-center mt-20">
        <div className="flex flex-col bg-white w-[356px] min-h-[283px] rounded-[18px] shadow-md py-5 px-6">
          <span className="text-[13px] font-[500] text-[#a2a2a2]">날짜짜</span>
          <span className="mt-2 text-[24px] font-[700] text-[#414141]">
            미국고용지표 서프라이즈---
          </span>
          <div className="border-b-gray-300 border-b-1 my-2"></div>
          <p className="mt-2 line-clamp-5">
            5월 미국 고용이 예상을5월 미국 고용이 예상을5월 미국 고용이
            예상을5월 미국 고용이 예상을5월 미국 고용이 예상을5월 미국 고용이
            예상을5월 미국 고용이 예상을 5월 미국 고용이 예상을5월 미국 고용이
            예상을5월 미국 고용이 예상을5월 미국 고용이 예상을5월 미국 고용이
            예상을5월 미국 고용이 예상을5월 미국 고용이 예상을 5월 미국 고용이
            예상을5월 미국 고용이 예상을5월 미국 고용이 예상을5월 미국 고용이
            예상을5월 미국 고용이 예상을5월 미국 고용이 예상을5월 미국 고용이
            예상을{" "}
          </p>
          <div className="flex justify-end mt-3 text-[13px] text-[#595959] font-[500] cursor-pointer">
            자세히 보기{">"}
          </div>
        </div>
      </div>

      {/* 전체뉴스스 */}
      <div>
        <div className="flex flex-col md:flex-row md:items-center mt-40">
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
            <div className="flex justify-center items-center ml-[8px] bg-[#43CD91] pt-[7px] pr-[14px] pb-[7px] pl-[14px] rounded-[5px] h-full cursor-pointer">
              <span className="text-white font-[500] text-[18px]">검색</span>
            </div>
          </div>
        </div>
        <div className="mt-[17px]">
          {data.data.content.map((economy) => (
            <Link key={economy.id} href={`economy/${economy.id}`}>
              <div className="bg-white w-full min-h-[206px] py-[30px] px-[29px] rounded-2xl shadow-md mb-14">
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
