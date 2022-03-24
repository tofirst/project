import React from "react";
import { Formik, Form, Field } from "formik";

const SignupPage = (props) => {
  const { title, nextPage } = props;

  async function onSubmitFunc(values) {
    console.log(JSON.stringify(values));
    nextPage();
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          email: "",
          username: "",
        }}
        onSubmit={onSubmitFunc}
      >
        {() => (
          <Form>
            <div className="flex w-96 flex-col gap-4">
              <h5 className="text-center text-3xl font-medium">{title}</h5>

              <div className="mt-6 flex items-center justify-center">
                <div className="h-5 w-5 rounded-full bg-blue-500"></div>
                <div className="h-1 w-12  bg-gray-300"></div>

                <div className="h-5 w-5 rounded-full bg-gray-300"></div>
                <div className="h-1 w-12  bg-gray-300 "></div>

                <div className="h-5 w-5 rounded-full bg-gray-300"></div>
              </div>
              <div
                id="login-form"
                className="mt-6 flex flex-col gap-6 text-[12px]"
              >
                <div className=" flex flex-col gap-3">
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="h-12 w-full rounded-full border border-gray-300 bg-transparent py-3 px-6 
                              outline-none  focus:border-blue-500"
                    required
                    placeholder="Email"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <label htmlFor="username">Username</label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="h-12 w-full rounded-full border border-gray-300 bg-transparent py-3 px-6 
                              outline-none  focus:border-blue-500"
                    required
                    placeholder="Username"
                  />
                </div>
              </div>

              <div className="w-ful mt-10 flex justify-end">
                <button
                  type="submit"
                  id="next-button"
                  className="w-36 rounded-full border bg-blue-500 px-6 py-2 text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 disabled:bg-gray-300"
                >
                  Next
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignupPage;
