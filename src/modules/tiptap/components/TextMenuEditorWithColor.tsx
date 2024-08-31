import React from 'react';

import { Color } from '@tiptap/extension-color';
import Document from '@tiptap/extension-document';
import History from '@tiptap/extension-history';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import TextStyle from '@tiptap/extension-text-style';
import { EditorContent, useEditor } from '@tiptap/react';

import styles from '../styles/TextMenuEditorWithColor.module.scss';

interface MenuBarProps {
  editor?: any;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <input
        type="color"
        onInput={(event: React.ChangeEvent<HTMLInputElement>) =>
          editor.chain().focus().setColor(event.target.value).run()
        }
        value={editor.getAttributes('textStyle').color}
        title="Text Color"
      />
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={`${styles.button} ${
          editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''
        }`}
      >
        Set Purple
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#F98181').run()}
        className={`${styles.button} ${
          editor.isActive('textStyle', { color: '#F98181' }) ? 'is-active' : ''
        }`}
      >
        Set Red
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#FBBC88').run()}
        className={`${styles.button} ${
          editor.isActive('textStyle', { color: '#FBBC88' }) ? 'is-active' : ''
        }`}
      >
        Set Orange
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#FAF594').run()}
        className={`${styles.button} ${
          editor.isActive('textStyle', { color: '#FAF594' }) ? 'is-active' : ''
        }`}
      >
        Set Yellow
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#70CFF8').run()}
        className={`${styles.button} ${
          editor.isActive('textStyle', { color: '#70CFF8' }) ? 'is-active' : ''
        }`}
      >
        Set Blue
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#94FADB').run()}
        className={`${styles.button} ${
          editor.isActive('textStyle', { color: '#94FADB' }) ? 'is-active' : ''
        }`}
      >
        Set Teal
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#B9F18D').run()}
        className={`${styles.button} ${
          editor.isActive('textStyle', { color: '#B9F18D' }) ? 'is-active' : ''
        }`}
      >
        Set Green
      </button>
      <button
        onClick={() => editor.chain().focus().unsetColor().run()}
        className={`${styles.button}`}
      >
        Unset Color
      </button>
    </>
  );
};

const TextMenuEditorWithColor: React.FC = (props) => {
  const editor = useEditor({
    extensions: [
      Color.configure({
        types: ['textStyle'],
      }),
      Document,
      History.configure({
        depth: 100,
        newGroupDelay: 500,
      }),
      Paragraph,
      Text,
      TextStyle,
    ],
    content: `
        <p><span style="color: #958DF1">Oh, for some reason that&apos;s purple.</span></p>
      `,
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

export default TextMenuEditorWithColor;
