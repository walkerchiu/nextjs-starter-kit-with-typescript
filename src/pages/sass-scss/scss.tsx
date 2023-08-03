import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import "./scss.scss";

export default function SassPage() {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Scss (Sassy CSS)"
        description="Sassy CSS (SCSS) is a syntax extension of SASS."
      />
      <main className="mb-auto pt-5 px-10 md:px-16">
        <section
          style={{
            marginBottom: "20px",
          }}
        >
          <div className="container">
            <h1>Hello Next.js with Scss</h1>
            <p>This is a sample page using Scss for styling.</p>
            <button className="button">Click me</button>
          </div>
        </section>
      </main>
      <Footer>
        <ol
          className="pl-6"
          style={{
            listStyleType: "number",
          }}
        >
          <li>
            Sass (Learn Sass):
            <br />
            <a
              href="https://sass-lang.com/guide"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://sass-lang.com/guide
            </a>
          </li>
          <li>
            Sass (Documentation):
            <br />
            <a
              href="https://sass-lang.com/documentation"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://sass-lang.com/documentation
            </a>
          </li>
          <li>
            Sass (Playground):
            <br />
            <a
              href="https://sass-lang.com/playground"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://sass-lang.com/playground
            </a>
          </li>
          <li>
            Sass (GitHub):
            <br />
            <a
              href="https://github.com/sass/sass"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://github.com/sass/sass
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
}
