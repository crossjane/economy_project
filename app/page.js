import Slide from "@/components/Slide";
import WrapperSearchPagination from "@/components/WrapperSearchPagination/WrapperSearchPagination";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function Home({ searchParams }) {
  const param = await searchParams;
  let loadEconoiesApi = `http://43.201.36.186/_api/v1/economy`;

  if (param) {
    const searchKeyword = param.searchKeyword ? param.searchKeyword : "";
    const page = param.page ? param.page : 0;

    loadEconoiesApi =
      loadEconoiesApi +
      `?searchKeyword=${searchKeyword}&page=${page <= 0 ? page : page - 1}`;
  }
  const response = await fetch(loadEconoiesApi);
  const data = await response.json();

  const endDate = moment().format("YYYY-MM-DD");
  const startDate = moment().subtract(6, "day").format("YYYY-MM-DD");

  const weekEconoiesResponse = await fetch(
    `http://43.201.36.186/_api/v1/economy?startDate=${startDate}&endDate=${endDate}`
  );

  const weekEconoiesData = await weekEconoiesResponse.json();

  return (
    <div className="flex flex-col px-4">
      {/* 헤더*/}
      <div className="flex justify-end mt-12">
        <Link href={"/dictionary"}>
          <Image
            src="/btn_사전.svg"
            alt="dictionary_btn"
            width={130}
            height={100}
            className="cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex flex-col items-center mt-17">
        <span className="text-[20px] font-[500] text-[#43CD91]">
          코후비 선정
        </span>
        <span className="text-[30px] font-[700] text-[#414141] mt-1">
          이 주의 경제 뉴스
        </span>
      </div>
      <Slide />

      {/* 상단 카드*/}
      <div className="flex flex-col">
        <Slide>
          {weekEconoiesData.data.content.map((economy) => (
            <Link key={economy.id} href={`economy/${economy.id}`}>
              <div className=" px-3 mb-6 mt-10">
                <div
                  className="flex flex-col  bg-white w-full h-[283px] rounded-[18px] p-[24px] shadow-md"
                  key={economy.id}
                >
                  <div>
                    <span className="text-[13px] font-[500] text-[#a2a2a2]">
                      {moment(economy.createdAt).format("YYYY년 MM월 DD일")}
                    </span>
                  </div>

                  <p className="mt-2 pb-[12px] border-b-1 border-gray-300 text-[24px] font-[700] text-[#414141] line-clamp-2">
                    {economy.title}
                  </p>
                  <p className="flex-1 mt-[11px] line-clamp-3">
                    {economy.contentWithoutHtml}
                  </p>
                  <div className="flex justify-end mt-3 text-[13px] text-[#595959] font-[500] cursor-pointer">
                    자세히 보기{">"}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Slide>
      </div>

      {/* 전체뉴스스 */}
      <WrapperSearchPagination data={data} />
    </div>
  );
}
