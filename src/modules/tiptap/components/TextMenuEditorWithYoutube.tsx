import React from "react";

import Youtube from "@tiptap/extension-youtube";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import styles from "../styles/TextMenuEditorWithYoutube.module.scss";

interface MenuBarProps {
  editor?: any;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  const addYoutubeVideo = () => {
    const url = prompt("Enter YouTube URL");
    const widthInput = prompt("Enter Width of the video");
    const heightInput = prompt("Enter Height of the video");

    if (url) {
      const width = widthInput ? Math.max(320, parseInt(widthInput, 10)) : 640;
      const height = heightInput
        ? Math.max(180, parseInt(heightInput, 10))
        : 480;

      editor.commands.setYoutubeVideo({
        src: url,
        width: width,
        height: height,
      });
    }
  };

  return (
    <>
      <button id="add" onClick={addYoutubeVideo} className={`${styles.button}`}>
        Add YouTube video
      </button>
    </>
  );
};

const TextMenuEditorWithYoutube: React.FC = (props) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Youtube.configure({
        controls: false,
      }),
    ],
    content: `
        <p>Tiptap now supports YouTube embeds! Awesome!</p>
        <div data-youtube-video>
          <iframe src="https://www.youtube.com/watch?v=6OGu-kPK834"></iframe>
        </div>
        <p>Try adding your own video to this editor!</p>
      `,
    editorProps: {
      attributes: {
        spellcheck: "false",
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div>
      <div className={styles.MenuBar}>
        <MenuBar editor={editor} />
      </div>
      <div className={styles.editorContent}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextMenuEditorWithYoutube;
