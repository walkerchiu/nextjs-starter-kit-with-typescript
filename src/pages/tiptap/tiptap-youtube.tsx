import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';
import TextMenuEditorWithYoutube from '../../modules/tiptap/components/TextMenuEditorWithYoutube';

export default function TiptapPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Tiptap (Youtube)"
        description="Adds a new YouTube embed node to the editor."
      />
      <main className="mb-auto pt-5 px-10 md:px-16">
        <section
          style={{
            marginBottom: '20px',
          }}
        >
          <TextMenuEditorWithYoutube />
        </section>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: 'number',
          }}
        >
          <li>
            Tiptap (Next.js):
            <br />
            <a
              href="https://tiptap.dev/installation/nextjs"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://tiptap.dev/installation/nextjs
            </a>
          </li>
          <li>
            Tiptap (Examples):
            <br />
            <a
              href="https://tiptap.dev/examples/default"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://tiptap.dev/examples/default
            </a>
          </li>
          <li>
            Tiptap (Youtube):
            <br />
            <a
              href="https://tiptap.dev/api/nodes/youtube"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://tiptap.dev/api/nodes/youtube
            </a>
          </li>
          <li>
            Tiptap (GitHub):
            <br />
            <a
              href="https://github.com/ueberdosis/tiptap"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/ueberdosis/tiptap
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
}
