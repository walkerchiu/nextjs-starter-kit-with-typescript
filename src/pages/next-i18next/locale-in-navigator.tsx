import { useEffect, useState } from "react";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";

export default function LocaleInNavigator() {
  const [language, setLanguage] = useState("");
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    setLanguage(navigator.language);
    setLanguages(Array.from(navigator.languages));
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header
        title="Locale in Navigator"
        description="The Accept-Language HTTP header in every HTTP request from the user's browser."
      />
      <main className="mb-auto pt-5 px-10 md:px-16">
        <section
          style={{
            marginBottom: "20px",
          }}
        >
          <div>
            <p>
              The <code>Navigator.languages</code> read-only property returns an
              array of strings representing the user&apos;s preferred languages.
              The language is described using language tags according to{" "}
              <a
                href="https://datatracker.ietf.org/doc/html/rfc5646"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                RFC 5646: Tags for Identifying Languages (also known as BCP 47)
              </a>
              . In the returned array they are ordered by preference with the
              most preferred language first.
            </p>
          </div>
        </section>
        <section
          style={{
            marginBottom: "20px",
          }}
        >
          <div>
            <p>
              The value of <code>navigator.language</code> is the first element
              of the returned array.
            </p>
          </div>
        </section>
        <section
          style={{
            marginBottom: "20px",
          }}
        >
          <div>
            <p>
              When its value changes, as the user&apos;s preferred languages are
              changed a{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Window/languagechange_event"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                languagechange
              </a>{" "}
              event is fired on the{" "}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Window"
                target="_blank"
                rel="noreferrer noopener"
                className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
              >
                Window
              </a>{" "}
              object.
            </p>
          </div>
        </section>
        <section
          style={{
            marginBottom: "20px",
          }}
        >
          <div>
            <p>
              The <code>Accept-Language</code> HTTP header in every HTTP request
              from the user&apos;s browser uses the same value for the{" "}
              <code>navigator.languages</code> property except for the extra{" "}
              <code>qvalues</code> (quality values) field (e.g.{" "}
              <code>en-US;q=0.8</code>).
            </p>
          </div>
        </section>
        <section>
          <div>
            <p>
              <strong>language:</strong> {language}
            </p>
            <p>
              <strong>languages:</strong> {languages.join(", ")}
            </p>
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
            Navigator: language property:
            <br />
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://developer.mozilla.org/en-US/docs/Web/API/Navigator/language
            </a>
          </li>
          <li>
            Navigator: languages property:
            <br />
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://developer.mozilla.org/en-US/docs/Web/API/Navigator/languages
            </a>
          </li>
          <li>
            Navigator:
            <br />
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/API/Navigator"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://developer.mozilla.org/en-US/docs/Web/API/Navigator
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
}
