import React, { useState } from "react";
// import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import DialogModal from "../DialogModal";
import PicturePasswordModal from "../dialogs/PicturePasswordModal";

import { Formik, Form, Field } from "formik";

function SigninPage(props) {
  const { title, nextPage } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [pictureOpen, setPictureOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function closePictureModal() {
    setPictureOpen(false);
  }

  async function onSubmitFunc(values) {
    nextPage();
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          username: "",
        }}
        onSubmit={onSubmitFunc}
      >
        {({ values }) => (
          <Form>
            <div className="flex h-96 w-96 flex-col gap-4">
              <h5 className="text-center text-3xl font-medium">{title}</h5>
              <div id="login-form" className="flex flex-col gap-4 text-[12px]">
                <div className="mt-16 flex flex-col gap-3">
                  <label htmlFor="username">Email or Username</label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    className="h-12 w-full rounded-full border border-gray-300 bg-transparent py-3 px-6 
                              outline-none  focus:border-blue-500"
                    required
                    placeholder="อีเมล หรือ โทรศัพท์"
                  />
                </div>
                {/* 
                <div className="flex items-center gap-1">
                  <button
                    type="submit"
                    className={`text-primary inline-flex items-center bg-transparent 
                             hover:underline focus:outline-none `}
                  >
                    <span>ลงชื่อเข้าใช้ด้วยรูปภาพ</span>
                  </button>
                  <button type="button" onClick={openModal}>
                    <QuestionMarkCircleIcon className="h-5 w-5 text-gray-300" />
                  </button>
                </div> */}
              </div>

              <div className="w-ful mt-3">
                <button
                  type="submit"
                  id="next-button"
                  className="w-full rounded-full border bg-blue-500 px-6 py-2 text-white hover:border-blue-500 hover:bg-transparent hover:text-blue-500 disabled:bg-gray-300"
                >
                  Login with picture password
                </button>
              </div>
              <div className="flex h-full w-full flex-col justify-end  gap-3">
                <div className="flex w-full justify-center text-sm">
                  <span>Not registered yet?</span>
                  <a
                    href="/signup"
                    className="ml-1  text-blue-500 hover:underline"
                  >
                    Create an Image password!
                  </a>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>

      <DialogModal isOpen={isOpen} closeModal={closeModal} />

      <PicturePasswordModal
        isOpen={pictureOpen}
        closeModal={closePictureModal}
      />
    </>
  );
}

export default SigninPage;
