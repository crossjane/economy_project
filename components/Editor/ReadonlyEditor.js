"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

function ReadonlyEditor({ content }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editable: true,
  });

  if (!editor) {
    return null;
  }
  return (
    <div className="w-[90%] border border-gray-300 rounded-md focus-within:border-blue-500">
      <EditorContent
        editor={editor}
        className="px-2 py-1 w-full focus:outline-none"
      />
   
    </div>
  );
}

export default ReadonlyEditor;
