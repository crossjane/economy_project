import Image from "next/image";

export default async function Dictinary() {
  const response = await fetch("http://43.201.36.186/_api/v1/dictionary");
  const data = await response.json();

  return (
    <div className="flex flex-col justify-center items-center mt-30">
      <div className="flex flex-row items-end">
        <Image
          src="/btn_economyNews.svg"
          alt="btn_news"
          width={100}
          height={10}
          className="cursor-pointer"
        />
      </div>
      <div>
        <span className="flex justify-center text-[20px] text-[#414141]">
          코후비의 쉽게 설명한
        </span>
        <div className="flex flex-row items-center  mb-[165px]">
          <Image
            src="/img_dictionary.svg"
            alt="dictionary_img"
            width={40}
            height={100}
          ></Image>
          <span className="text-[30px] text-[#414141] font-[700] ml-3">
            경제 용어 사전
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center mb-20">
        <input
          placeholder="검색어 입력"
          className="bg-white p-2 rounded-md border-1 border-gray-300 w-100"
        ></input>
        <div>검색</div>
      </div>
      <div>디플레이션: 물가가 지속적으로 하락하는 현상</div>
    </div>
  );
}
