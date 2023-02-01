import type { NextPage } from "next";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import GoogleReCaptchaForm from "../../modules/google-recaptcha/react-google-recaptcha-v3/GoogleReCaptchaForm";

const ReactGoogleRecaptchaV3Page: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="react-google-recaptcha-v3 (with React Hook Form)"
        description="reCAPTCHA is a free service that protects your site from spam and abuse. It uses advanced risk analysis techniques to tell humans and bots apart."
      />
      <main
        id="main"
        className="flex w-full flex-1 flex-col items-center justify-center pt-5 text-center"
      >
        <GoogleReCaptchaProvider
          reCaptchaKey="YourReCaptchaKey"
          scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined,
          }}
        >
          <GoogleReCaptchaForm />
        </GoogleReCaptchaProvider>
      </main>
      <Footer>
        <ol
          style={{
            listStyleType: "number",
          }}
          className="pl-6"
        >
          <li>
            Choosing the type of reCAPTCHA:
            <br />
            <a
              href="https://developers.google.com/recaptcha/docs/versions"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://developers.google.com/recaptcha/docs/versions
            </a>
          </li>
          <li>
            Comparison of features between reCAPTCHA versions:
            <br />
            <a
              href="https://cloud.google.com/recaptcha-enterprise/docs/compare-versions"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://cloud.google.com/recaptcha-enterprise/docs/compare-versions
            </a>
          </li>
          <li>
            react-hook-form:
            <br />
            <a
              href="https://react-hook-form.com/get-started"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://react-hook-form.com/get-started
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default ReactGoogleRecaptchaV3Page;
