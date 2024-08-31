import React from 'react';

import Document from '@tiptap/extension-document';
import History from '@tiptap/extension-history';
import Paragraph from '@tiptap/extension-paragraph';
import Placeholder from '@tiptap/extension-placeholder';
import Text from '@tiptap/extension-text';
import { EditorContent, useEditor } from '@tiptap/react';

import styles from '../styles/TextMenuEditorWithPlaceholder.module.scss';

const TextMenuEditorWithPlaceholder: React.FC = (props) => {
  const editor = useEditor({
    extensions: [
      Document,
      History.configure({
        depth: 100,
        newGroupDelay: 500,
      }),
      Paragraph,
      Placeholder.configure({
        // Use a placeholder:
        placeholder: 'Write something …',
        // Use different placeholders depending on the node type:
        // placeholder: ({ node }) => {
        //   if (node.type.name === 'heading') {
        //     return 'What’s the title?'
        //   }

        //   return 'Can you add some further context?'
        // },
      }),
      Text,
    ],
  });

  return (
    <div>
      <div className={styles.editorContent}>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default TextMenuEditorWithPlaceholder;
