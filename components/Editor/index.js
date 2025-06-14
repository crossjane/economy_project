"use client";

import "./styles.css";

import Color from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import React from "react";
import MenuBar from "./MenuBar";
import Highlight from "@tiptap/extension-highlight";
import { createLowlight } from "lowlight";
import { common } from "lowlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import "highlight.js/styles/github.css";

// 코드블록 언어 등록
const lowlight = createLowlight();
Object.entries(common).forEach(([name, syntax]) => {
  lowlight.register(name, syntax);
});

const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  Highlight,
  StarterKit.configure({
    codeBlock: false,
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO : Making this as `false` becase marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  CodeBlockLowlight.configure({
    lowlight,
  }),
];

function Editor({ content, onChangeContent, onChangeContentWithoutHtml }) {
  return (
    <div>
      <EditorProvider
        slotBefore={<MenuBar />}
        extensions={extensions}
        content={content}
        onUpdate={({ editor }) => {
          onChangeContent(editor.getHTML());
          onChangeContentWithoutHtml(editor.getText());
        }}
      ></EditorProvider>
    </div>
  );
}

export default Editor;
