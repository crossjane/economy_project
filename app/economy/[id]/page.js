import ReadonlyEditor from "@/components/Editor/ReadonlyEditor";
import React from "react";

async function EconomyDetail({ params }) {
  const { id } = await params;
  const response = await fetch(`http://43.201.36.186/_api/v1/economy/${id}`);
  const data = await response.json();

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col bg-white rounded-3xl w-full min-h-[920px] mt-30 shadow-md py-[65px] px-[70px] mb-30">
        <span className="text-[18px] text-[#a2a2a2]">
          {data.data.createdAt}
        </span>
        <span className="text-[32px] text-[#414141] font-[700]">
          {data.data.title}
        </span>
        <div className="border-b-1 border-gray-200 mt-5 "></div>

        <ReadonlyEditor content={data.data.content} />
      </div>
    </div>
  );
}

export default EconomyDetail;

// 완성해오기 . 공식문서 참고 , id가져오는 방법 + 완성 use Client 들어간 예제 보지 말기
// 링킹앤 네비게이션 공식문서 -> Page params
