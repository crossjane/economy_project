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
  return <EditorContent editor={editor} />;
}

export default ReadonlyEditor;
