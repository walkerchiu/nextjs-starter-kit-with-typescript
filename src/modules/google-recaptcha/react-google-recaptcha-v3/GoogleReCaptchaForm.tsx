import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import * as yup from "yup";

type TestSubmitForm = {
  email: string;
  password: string;
};

const GoogleReCaptchaForm = () => {
  const [notification, setNotification] = useState("");

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .trim()
      .required("Email is required")
      .email("Email is invalid"),
    password: yup
      .string()
      .trim()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TestSubmitForm>({
    resolver: yupResolver(validationSchema),
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const onSubmit = (data: TestSubmitForm) => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available!");
      return;
    }
    executeRecaptcha("auth").then((gReCaptchaToken) => {
      console.log("gReCaptchaToken: ", gReCaptchaToken);
      submitForm(gReCaptchaToken, data);
    });
  };

  const submitForm = (gReCaptchaToken: string, data: TestSubmitForm) => {
    fetch("http://api-dev.localhost:8000/auth/graphql", {
      method: "POST",
      headers: {
        Accept: "*/*",
        "Content-Type": "application/json",
        "x-tenant": "demo.localhost",
      },
      body: JSON.stringify({
        query: `
          mutation TokenAuth($email: String!, $password: String!, $captcha: String!) {
            tokenAuth(input:{email: $email, password: $password, captcha: $captcha}) {
              token
              payload
              refreshToken
              refreshExpiresIn
            }
          }
              `,
        variables: {
          email: data.email,
          password: data.password,
          captcha: gReCaptchaToken,
        },
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("response: ", res);
        if (res?.errors) {
          setNotification("Fail!");
        } else {
          setNotification("Success!");
        }
      })
      .catch((rejected) => {
        console.log(rejected);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-2xl mb-5 font-bold dark:text-white">
        Signin (Google Recaptcha v3)
      </p>
      {notification && (
        <div className="mb-6 font-bold text-red-500">{notification}</div>
      )}
      <div className="mb-6 grid grid-cols-4 text-left">
        <label className="block p-3 font-medium" htmlFor="email">
          Email
        </label>
        <div className="col-span-3">
          <input
            type="text"
            id="email"
            {...register("email")}
            className={`border rounded-lg block w-full p-2.5 ${
              errors.email
                ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                : ""
            }`}
          />
          <div className="mt-2 text-red-600 dark:text-red-500">
            {errors.email?.message}
          </div>
        </div>
      </div>
      <div className="mb-6 grid grid-cols-4 text-left">
        <label className="block p-3 font-medium" htmlFor="email">
          Password
        </label>
        <div className="col-span-3">
          <input
            type="password"
            id="password"
            {...register("password")}
            className={`border rounded-lg block w-full p-2.5 ${
              errors.password
                ? "bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500"
                : ""
            }`}
          />
          <div className="mt-2 text-red-600 dark:text-red-500">
            {errors.email?.message}
          </div>
        </div>
      </div>
      <div className="mb-6">
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => reset()}
          className="ml-2 py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default GoogleReCaptchaForm;
