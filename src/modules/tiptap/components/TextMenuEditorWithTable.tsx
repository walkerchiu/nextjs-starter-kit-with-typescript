import React from "react";

import Document from "@tiptap/extension-document";
import Gapcursor from "@tiptap/extension-gapcursor";
import Paragraph from "@tiptap/extension-paragraph";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";

import styles from "../styles/TextMenuEditorWithTable.module.scss";
import "../../../app/styles/TextMenuEditorWithTable.css";

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
        onClick={() =>
          editor
            .chain()
            .focus()
            .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
            .run()
        }
        className={`${styles.button}`}
      >
        Insert Table
      </button>
      <button
        onClick={() => editor.chain().focus().addColumnBefore().run()}
        className={`${styles.button}`}
      >
        Add Column Before
      </button>
      <button
        onClick={() => editor.chain().focus().addColumnAfter().run()}
        className={`${styles.button}`}
      >
        Add Column After
      </button>
      <button
        onClick={() => editor.chain().focus().deleteColumn().run()}
        className={`${styles.button}`}
      >
        Delete Column
      </button>
      <button
        onClick={() => editor.chain().focus().addRowBefore().run()}
        className={`${styles.button}`}
      >
        Add Row Before
      </button>
      <button
        onClick={() => editor.chain().focus().addRowAfter().run()}
        className={`${styles.button}`}
      >
        Add Row After
      </button>
      <button
        onClick={() => editor.chain().focus().deleteRow().run()}
        className={`${styles.button}`}
      >
        Delete Row
      </button>
      <button
        onClick={() => editor.chain().focus().deleteTable().run()}
        className={`${styles.button}`}
      >
        Delete Table
      </button>
      <button
        onClick={() => editor.chain().focus().mergeCells().run()}
        className={`${styles.button}`}
      >
        Merge Cells
      </button>
      <button
        onClick={() => editor.chain().focus().splitCell().run()}
        className={`${styles.button}`}
      >
        Split Cell
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
        className={`${styles.button}`}
      >
        Toggle Header Column
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderRow().run()}
        className={`${styles.button}`}
      >
        Toggle Header Row
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderCell().run()}
        className={`${styles.button}`}
      >
        Toggle Header Cell
      </button>
      <button
        onClick={() => editor.chain().focus().mergeOrSplit().run()}
        className={`${styles.button}`}
      >
        Merge or Split
      </button>
      <button
        onClick={() =>
          editor.chain().focus().setCellAttribute("colspan", 2).run()
        }
        className={`${styles.button}`}
      >
        Set Cell Attribute
      </button>
      <button
        onClick={() => editor.chain().focus().fixTables().run()}
        className={`${styles.button}`}
      >
        Fix Tables
      </button>
      <button
        onClick={() => editor.chain().focus().goToNextCell().run()}
        className={`${styles.button}`}
      >
        Go to Next Cell
      </button>
      <button
        onClick={() => editor.chain().focus().goToPreviousCell().run()}
        className={`${styles.button}`}
      >
        Go to Previous Cell
      </button>
    </>
  );
};

const TextMenuEditorWithTable: React.FC = (props) => {
  const editor = useEditor({
    extensions: [
      Document,
      Gapcursor,
      Paragraph,
      Text,
      Table.configure({
        HTMLAttributes: {
          class: "my-custom-class",
        },
        resizable: true,
        handleWidth: 5,
        cellMinWidth: 25,
        lastColumnResizable: true,
        allowTableNodeSelection: false,
      }),
      TableRow.extend({
        content: "(tableCell | tableHeader)*",
      }),
      TableHeader,
      TableCell,
    ],
    content: `
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th colspan="3">Description</th>
          </tr>
          <tr>
            <td>Cyndi Lauper</td>
            <td>singer</td>
            <td>songwriter</td>
            <td>actress</td>
          </tr>
        </tbody>
      </table>
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

export default TextMenuEditorWithTable;
