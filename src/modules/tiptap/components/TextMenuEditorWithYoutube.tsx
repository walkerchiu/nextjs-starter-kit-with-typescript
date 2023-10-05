import React, { useState } from "react";

import Youtube from "@tiptap/extension-youtube";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Modal from "react-modal";

import styles from "../styles/TextMenuEditorWithYoutube.module.scss";

interface MenuBarProps {
  editor?: any;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [width, setWidth] = useState(640);
  const [height, setHeight] = useState(480);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleReset = () => {
    setUrl("");
    setWidth(640);
    setHeight(480);
  };

  const handleSubmit = () => {
    if (url) {
      const widthValue = Math.max(320, parseInt(width.toString(), 10));
      const heightValue = Math.max(180, parseInt(height.toString(), 10));

      editor.commands.setYoutubeVideo({
        src: url,
        width: widthValue,
        height: heightValue,
      });

      closeModal();
    }
  };

  return (
    <>
      <button id="add" onClick={openModal} className={`${styles.button}`}>
        Add YouTube video
      </button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Add YouTube Video Modal"
        className={styles.Modal}
      >
        <h2>Add YouTube Video</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="youtubeUrl">YouTube URL:</label>
            <input
              type="text"
              id="youtubeUrl"
              value={url}
              required
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="videoWidth">Width:</label>
            <input
              type="number"
              id="videoWidth"
              value={width}
              required
              onChange={(e) => setWidth(parseInt(e.target.value, 10))}
            />
          </div>
          <div>
            <label htmlFor="videoHeight">Height:</label>
            <input
              type="number"
              id="videoHeight"
              value={height}
              required
              onChange={(e) => setHeight(parseInt(e.target.value, 10))}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="button"
              onClick={closeModal}
              className={styles.closeButton}
            >
              Close
            </button>
            <button
              type="reset"
              onClick={handleReset}
              className={styles.resetButton}
            >
              Reset
            </button>
            <button type="submit" className={styles.submitButton}>
              Add Video
            </button>
          </div>
        </form>
      </Modal>
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
