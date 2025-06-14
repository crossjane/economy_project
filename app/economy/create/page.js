"use client";

import Editor from "@/components/Editor";
import { EditorContent } from "@tiptap/react";
import React, { useState } from "react";

const EconomyCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contentWithoutHtml, setContentWithoutHtml] = useState("");

  function onChangeContent(value) {
    setContent(value);
  }

  function onChangeContentWithoutHtml(value) {
    console.log("onChangeContentWithoutHtml value :", value);
    setContentWithoutHtml(value);
  }
  return (
    <div className="flex flex-col items-center w-[1116px]">
      <div className="bg-white w-full rounded-2xl shadow-md mt-20 min-h-100">
        <Editor
          content={content}
          onChangeContent={onChangeContent}
          onChangeContentWithoutHtml={onChangeContentWithoutHtml}
        />
      </div>
      <div className="flex flex-row items-center justify-center text-white bg-[#43CD91] w-[200px] rounded-md mt-10 py-2 cursor-pointer hover:bg-[#30996c]">
        <div>저장하기</div>
      </div>
    </div>
  );
};

export default EconomyCreate;
