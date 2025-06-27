import DictionarySearch from "@/components/DictionarySearch";
import WrapperSearchPaginationDictionary from "@/components/WrapperSearchPagination/WarapperSesarchPaginationDictionary";
import Image from "next/image";
import Link from "next/link";

export default async function Dictinary({ searchParams }) {
  const param = await searchParams;
  console.log("서치파람", param);
  // 검색어가 들어옴.
  let loadDictionaryApi = "http://43.201.36.186/_api/v1/dictionary";

  if (param) {
    const searchKeyword = param.searchKeyword ?? "";
    const page = param.page ?? 1;

    loadDictionaryApi =
      loadDictionaryApi + `?searchKeyword=${searchKeyword}&page=${page - 1}`;
  }

  const response = await fetch(loadDictionaryApi);
  const searchedData = await response.json();

  return (
    <div className="flex flex-col  items-center mt-30">
      <div className=" flex flex-row justify-end items-end w-[1116px] mb-10">
        <Link href={"/"}>
          <Image
            src="/btn_economyNews.svg"
            alt="btn_news"
            width={100}
            height={10}
            className="cursor-pointer"
          />
        </Link>
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
      <WrapperSearchPaginationDictionary data={searchedData.data} />
    </div>
  );
}
