"use client";

import Editor from "@/components/Editor";
import React, { useState } from "react";

const EconomyCreate = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [contentWithoutHtml, setContentWithoutHtml] = useState("");

  function onChangeContent(value) {
    console.log("onChangeContent value :", value);
    setContent(value);
  }

  function onChangeContentWithoutHtml(value) {
    console.log("onChangeContentWithoutHtml value :", value);
    setContentWithoutHtml(value);
  }
  return (
    <div>
      
      <Editor
        content={content}
        onChangeContent={onChangeContent}
        onChangeContentWithoutHtml={onChangeContentWithoutHtml}
      />
    </div>
  );
};

export default EconomyCreate;
