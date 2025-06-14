"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";

function ReadonlyEditor({ content }) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
  });

  if (!editor) {
    return null;
  }
  return (
    <div className="w-[90%] mt-10">
      <EditorContent
        editor={editor}
        className="px-2 py-1 w-full focus:outline-none tiptap"
      />
    </div>
  );
}

export default ReadonlyEditor;
