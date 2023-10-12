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
        insertTable
      </button>
      <button
        onClick={() => editor.chain().focus().addColumnBefore().run()}
        className={`${styles.button}`}
      >
        addColumnBefore
      </button>
      <button
        onClick={() => editor.chain().focus().addColumnAfter().run()}
        className={`${styles.button}`}
      >
        addColumnAfter
      </button>
      <button
        onClick={() => editor.chain().focus().deleteColumn().run()}
        className={`${styles.button}`}
      >
        deleteColumn
      </button>
      <button
        onClick={() => editor.chain().focus().addRowBefore().run()}
        className={`${styles.button}`}
      >
        addRowBefore
      </button>
      <button
        onClick={() => editor.chain().focus().addRowAfter().run()}
        className={`${styles.button}`}
      >
        addRowAfter
      </button>
      <button
        onClick={() => editor.chain().focus().deleteRow().run()}
        className={`${styles.button}`}
      >
        deleteRow
      </button>
      <button
        onClick={() => editor.chain().focus().deleteTable().run()}
        className={`${styles.button}`}
      >
        deleteTable
      </button>
      <button
        onClick={() => editor.chain().focus().mergeCells().run()}
        className={`${styles.button}`}
      >
        mergeCells
      </button>
      <button
        onClick={() => editor.chain().focus().splitCell().run()}
        className={`${styles.button}`}
      >
        splitCell
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderColumn().run()}
        className={`${styles.button}`}
      >
        toggleHeaderColumn
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderRow().run()}
        className={`${styles.button}`}
      >
        toggleHeaderRow
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeaderCell().run()}
        className={`${styles.button}`}
      >
        toggleHeaderCell
      </button>
      <button
        onClick={() => editor.chain().focus().mergeOrSplit().run()}
        className={`${styles.button}`}
      >
        mergeOrSplit
      </button>
      <button
        onClick={() =>
          editor.chain().focus().setCellAttribute("colspan", 2).run()
        }
        className={`${styles.button}`}
      >
        setCellAttribute
      </button>
      <button
        onClick={() => editor.chain().focus().fixTables().run()}
        className={`${styles.button}`}
      >
        fixTables
      </button>
      <button
        onClick={() => editor.chain().focus().goToNextCell().run()}
        className={`${styles.button}`}
      >
        goToNextCell
      </button>
      <button
        onClick={() => editor.chain().focus().goToPreviousCell().run()}
        className={`${styles.button}`}
      >
        goToPreviousCell
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
