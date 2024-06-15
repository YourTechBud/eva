import Link from '@tiptap/extension-link';
import Placeholder from '@tiptap/extension-placeholder';
import Underline from '@tiptap/extension-underline';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Markdown } from 'tiptap-markdown';

interface RichTextEditorProps {
  editable: boolean;
  defaultContent?: string;
  onChange?: (content: string) => void;
}

export const RichTextEditor = ({
  editable,
  defaultContent,
  onChange,
}: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      Underline,
      Link.configure({
        HTMLAttributes: {
          class:
            'transition-[color] text-blue-500 hover:text-blue-400 cursor-pointer',
        },
      }),
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'ps-5 list-disc list-inside text-gray-800 dark:text-white',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class:
              'ps-5 list-decimal list-inside text-gray-800 dark:text-white',
          },
        },
        heading: {
          levels: [1, 2, 3],
        },
        bold: {
          HTMLAttributes: {
            class: 'font-semibold',
          },
        },
        paragraph: {
          HTMLAttributes: {
            class: 'text-gray-900 dark:text-white',
          },
        },
      }),
      Placeholder.configure({
        // Use a placeholder:
        placeholder: 'Tell me more...',
        showOnlyWhenEditable: false,
      }),
      Markdown.configure({
        transformPastedText: true,
      }),
    ],
    content: defaultContent,
    editorProps: {
      attributes: {
        class:
          'transition peer block w-full text-sm border-none focus:ring-0 outline-none',
      },
      handleKeyDown: (_view, event) => {
        if (event.keyCode === 9) {
          event.preventDefault();
        }
      },
    },
    editable: editable,
    injectCSS: false,
    onUpdate: ({ editor }) => {
      onChange && onChange(editor.getHTML());
    },
  });

  return (
    <>
      <EditorContent className="editor w-full" editor={editor} />
    </>
  );
};
