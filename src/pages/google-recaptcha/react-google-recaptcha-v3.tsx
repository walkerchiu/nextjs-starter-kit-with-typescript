import { useCallback } from 'react';

import type { NextPage } from 'next';
import {
  GoogleReCaptchaProvider,
  useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';

import Footer from '../../layouts/Footer';
import Header from '../../layouts/Header';

const YourReCaptchaComponent = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  // Create an event handler so you can call the verification on button click event or form submit
  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    try {
      const token = executeRecaptcha('auth').then((gReCaptchaToken) => {
        console.log('gReCaptchaToken: ', gReCaptchaToken);
      });
    } catch (error) {
      // TypeError: Failed to fetch
      console.log('There was an error', error);
    }
    // Do whatever you want with the token
  }, [executeRecaptcha]);

  return <button onClick={handleReCaptchaVerify}>Verify recaptcha</button>;
};

const ReactGoogleRecaptchaV3Page: NextPage = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header
        title="react-google-recaptcha-v3"
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
            appendTo: 'head',
            nonce: undefined,
          }}
        >
          <YourReCaptchaComponent />
          <div className="m-5 text-gray-400 text-left">
            {/*
              You are allowed to hide the badge as long as you include the reCAPTCHA branding visibly in the user flow. Please include the following text
              Reference: https://developers.google.com/recaptcha/docs/faq?ref=morioh.com&utm_source=morioh.com#id-like-to-hide-the-recaptcha-badge.-what-is-allowed
            */}
            This site is protected by reCAPTCHA and the Google{' '}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              Privacy Policy
            </a>{' '}
            and{' '}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-700 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              Terms of Service
            </a>{' '}
            apply.
          </div>
        </GoogleReCaptchaProvider>
      </main>
      <Footer>
        <ol
          style={{
            listStyleType: 'number',
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
            Domain/Package Name Validation:
            <br />
            <a
              href="https://developers.google.com/recaptcha/docs/domain_validation"
              target="_blank"
              rel="noreferrer noopener"
              className="text-blue-600 dark:text-blue-300 hover:underline hover:text-blue-600 focus:text-blue-600 dark:hover:text-yellow-200 dark:focus:text-yellow-200"
            >
              https://developers.google.com/recaptcha/docs/domain_validation
            </a>
          </li>
        </ol>
      </Footer>
    </div>
  );
};

export default ReactGoogleRecaptchaV3Page;
