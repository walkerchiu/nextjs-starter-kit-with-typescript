import React from 'react';

import { Color } from '@tiptap/extension-color';
import ListItem from '@tiptap/extension-list-item';
import TextStyle from '@tiptap/extension-text-style';
import { Underline } from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import styles from '../styles/TextMenuEditor.module.scss';

interface MenuBarProps {
  editor?: any;
}

const MenuBar: React.FC<MenuBarProps> = ({ editor }) => {
  if (!editor) {
    return null;
  }

  return (
    <>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`${styles.button} ${
          editor.isActive('paragraph') ? styles['is-active'] : ''
        }`}
      >
        paragraph
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        className={`${styles.button} ${
          editor.isActive('bold') ? styles['is-active'] : ''
        }`}
      >
        bold
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        className={`${styles.button} ${
          editor.isActive('italic') ? styles['is-active'] : ''
        }`}
      >
        italic
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        className={`${styles.button} ${
          editor.isActive('strike') ? styles['is-active'] : ''
        }`}
      >
        strike
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={!editor.can().chain().focus().toggleUnderline().run()}
        className={`${styles.button} ${
          editor.isActive('underline') ? styles['is-active'] : ''
        }`}
      >
        underline
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        className={`${styles.button} ${
          editor.isActive('code') ? styles['is-active'] : ''
        }`}
      >
        code
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`${styles.button} ${
          editor.isActive('heading', { level: 1 }) ? styles['is-active'] : ''
        }`}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`${styles.button} ${
          editor.isActive('heading', { level: 2 }) ? styles['is-active'] : ''
        }`}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`${styles.button} ${
          editor.isActive('heading', { level: 3 }) ? styles['is-active'] : ''
        }`}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`${styles.button} ${
          editor.isActive('heading', { level: 4 }) ? styles['is-active'] : ''
        }`}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`${styles.button} ${
          editor.isActive('heading', { level: 5 }) ? styles['is-active'] : ''
        }`}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`${styles.button} ${
          editor.isActive('heading', { level: 6 }) ? styles['is-active'] : ''
        }`}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`${styles.button} ${
          editor.isActive('bulletList') ? styles['is-active'] : ''
        }`}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`${styles.button} ${
          editor.isActive('orderedList') ? styles['is-active'] : ''
        }`}
      >
        ordered list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`${styles.button} ${
          editor.isActive('codeBlock') ? styles['is-active'] : ''
        }`}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`${styles.button} ${
          editor.isActive('blockquote') ? styles['is-active'] : ''
        }`}
      >
        blockquote
      </button>
      <button
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className={`${styles.button}`}
      >
        horizontal rule
      </button>
      <button
        onClick={() => editor.chain().focus().setHardBreak().run()}
        className={`${styles.button}`}
      >
        hard break
      </button>
      <button
        onClick={() => editor.chain().focus().unsetAllMarks().run()}
        className={`${styles.button}`}
      >
        clear marks
      </button>
      <button
        onClick={() => editor.chain().focus().clearNodes().run()}
        className={`${styles.button}`}
      >
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
        className={`${styles.button}`}
      >
        undo
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
        className={`${styles.button}`}
      >
        redo
      </button>
      <button
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={`${styles.button} ${
          editor.isActive('textStyle', { color: '#958DF1' })
            ? styles['is-active']
            : ''
        }`}
      >
        purple color
      </button>
    </>
  );
};

const TextEditor: React.FC = (props) => {
  const editor = useEditor({
    extensions: [
      Color.configure({ types: [TextStyle.name, ListItem.name] }),
      StarterKit.configure({
        blockquote: {
          HTMLAttributes: {
            class: 'blockquote',
          },
        },
        bulletList: {
          keepMarks: true,
          keepAttributes: false,
        },
        orderedList: {
          keepMarks: true,
          keepAttributes: false,
        },
      }),
      TextStyle,
      Underline,
    ],
    content: `
      <h2>
        Hi there,
      </h2>
      <p>
        this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you&apos;d probably expect from a text editor. But wait until you see the lists:
      </p>
      <ul>
        <li>
          That&apos;s a bullet list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ul>
      <ol>
        <li>
          That&apos;s a ordered list with one …
        </li>
        <li>
          … or two list items.
        </li>
      </ol>
      <hr>
      <p>
        Isn&apos;t that great? And all of that is editable. But wait, there&apos;s more. Let&apos;s try a code block:
      </p>
      <pre><code class="language-css">body {
  display: none;
}</code></pre>
      <p>
        I know, I know, this is impressive. It&apos;s only the tip of the iceberg though. Give it a try and click a little bit around. Don&apos;t forget to check the other examples too.
      </p>
      <blockquote>
        Wow, that&apos;s amazing. Good work, boy! 👏
        <br />
        — Mom
      </blockquote>
    `,
  });

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

export default TextEditor;
