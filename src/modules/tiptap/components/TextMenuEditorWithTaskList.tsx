import React from 'react';

import Document from '@tiptap/extension-document';
import History from '@tiptap/extension-history';
import Paragraph from '@tiptap/extension-paragraph';
import TaskItem from '@tiptap/extension-task-item';
import TaskList from '@tiptap/extension-task-list';
import Text from '@tiptap/extension-text';
import { EditorContent, useEditor } from '@tiptap/react';

import styles from '../styles/TextMenuEditorWithTaskList.module.scss';

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
        onClick={() => editor.chain().focus().toggleTaskList().run()}
        className={`${styles.button} ${
          editor.isActive('taskList') ? styles['is-active'] : ''
        }`}
      >
        Toggle Task List
      </button>
      <button
        onClick={() => editor.chain().focus().splitListItem('taskItem').run()}
        disabled={!editor.can().splitListItem('taskItem')}
        className={`${styles.button}`}
      >
        Split List Item
      </button>
      <button
        onClick={() => editor.chain().focus().sinkListItem('taskItem').run()}
        disabled={!editor.can().sinkListItem('taskItem')}
        className={`${styles.button}`}
      >
        Sink List Item
      </button>
      <button
        onClick={() => editor.chain().focus().liftListItem('taskItem').run()}
        disabled={!editor.can().liftListItem('taskItem')}
        className={`${styles.button}`}
      >
        Lift List Item
      </button>
    </>
  );
};

const TextMenuEditorWithTaskList: React.FC = (props) => {
  const editor = useEditor({
    extensions: [
      Document,
      History.configure({
        depth: 100,
        newGroupDelay: 500,
      }),
      Paragraph,
      Text,
      TaskList.configure({
        HTMLAttributes: {
          class: 'taskList',
        },
        itemTypeName: 'taskItem',
      }),
      TaskItem.configure({
        HTMLAttributes: {
          class: 'taskItem',
        },
        nested: true,
      }),
    ],
    content: `
        <ul className={${styles.taskList}}>
          <li data-type="taskItem" data-checked="true">A list item</li>
          <li data-type="taskItem" data-checked="false">And another one</li>
        </ul>
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

export default TextMenuEditorWithTaskList;
