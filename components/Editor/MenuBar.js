"use client";
import React from "react";
import { useCurrentEditor } from "@tiptap/react";

function MenuBar() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return null;
  }

  const basicEditStlye =
    "text-[#414141] border-gray-400 border-1 px-2 rounded-md mr-2 mb-2 cursor-pointer";

  return (
    <div className="control-group">
      <div className="button-group p-4 ">
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={`${basicEditStlye} ${
            editor.isActive("bold") ? "is-active" : ""
          } `}
        >
          Bold
        </button>
        <button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={`${basicEditStlye} ${
            editor.isActive("italic") ? "is-active" : ""
          } `}
        >
          Italic
        </button>
        <button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={`${basicEditStlye} ${
            editor.isActive("strike") ? "is-active" : ""
          } `}
        >
          Strike
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={`${basicEditStlye} ${
            editor.isActive("code") ? "is-active" : ""
          } `}
        >
          Code
        </button>
        <button
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          className={`${basicEditStlye}`}
        >
          Clear marks
        </button>
        <button
          onClick={() => editor.chain().focus().clearNodes().run()}
          className={`${basicEditStlye}`}
        >
          Clear nodes
        </button>
        <button
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={`${basicEditStlye} ${
            editor.isActive("paragraph") ? "is-active" : ""
          } `}
        >
          Paragraph
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={`${basicEditStlye} ${
            editor.isActive("heading", { level: 1 }) ? "is-active" : ""
          } `}
        >
          H1
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={`${basicEditStlye} ${
            editor.isActive("heading", { level: 2 }) ? "is-active" : ""
          }`}
        >
          H2
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={`${basicEditStlye} ${
            editor.isActive("heading", { level: 3 }) ? "is-active" : ""
          }`}
        >
          H3
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 4 }).run()
          }
          className={`${basicEditStlye} ${
            editor.isActive("heading", { level: 4 }) ? "is-active" : ""
          }`}
        >
          H4
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 5 }).run()
          }
          className={`${basicEditStlye} ${
            editor.isActive("heading", { level: 5 }) ? "is-active" : ""
          }`}
        >
          H5
        </button>
        <button
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 6 }).run()
          }
          className={`${basicEditStlye} ${
            editor.isActive("heading", { level: 6 }) ? "is-active" : ""
          }`}
        >
          H6
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`${basicEditStlye} ${
            editor.isActive("bulletList") ? "is-active" : ""
          } `}
        >
          Bullet list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`${basicEditStlye} ${
            editor.isActive("orderedList") ? "is-active" : ""
          } `}
        >
          Ordered list
        </button>
        <button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`${basicEditStlye} ${
            editor.isActive("codeBlock") ? "is-active" : ""
          } `}
        >
          Code block
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`${basicEditStlye} ${
            editor.isActive("blockquote") ? "is-active" : ""
          } `}
        >
          Blockquote
        </button>
        <button
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className={`${basicEditStlye}`}
        >
          Horizontal rule
        </button>
        <button
          onClick={() => editor.chain().focus().setHardBreak().run()}
          className={`${basicEditStlye}`}
        >
          Hard break
        </button>
        <button
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          className={`${basicEditStlye}`}
        >
          Undo
        </button>
        <button
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          className={`${basicEditStlye}`}
        >
          Redo
        </button>
        <button
          onClick={() => editor.chain().focus().setColor("#958DF1").run()}
          className={`${basicEditStlye} ${
            editor.isActive("textStyle", { color: "#958DF1" })
              ? "is-active"
              : ""
          } `}
        >
          Purple
        </button>
        <button
          onClick={() => editor.chain().focus().toggleHighlight().run()}
          className={`${basicEditStlye} ${
            editor.isActive("hightlight") ? "is-active" : ""
          } `}
        >
          Highlight
        </button>
      </div>
    </div>
  );
}

export default MenuBar;
