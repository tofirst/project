import React, { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import DialogModal from "components/DialogModal";
import PicturePasswordModal from "components/dialogs/PicturePasswordModal";
import axios from "axios";
import { Formik, Form, Field } from "formik";

function SigninPage(props) {
  const { title, initialValues, nextPage, goToPage, setEmail } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [pictureOpen, setPictureOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closePictureModal() {
    setPictureOpen(false);
  }

  async function onSubmit(values) {
    const res = await axios.get("http://localhost:8000/user/" + values.email);
    setEmail(values.email);
    localStorage.setItem("imgPasswordUrl", res.data.imgUrl);
    goToPage(2);
  }

  const handleNextPage = (values) => {
    localStorage.setItem("email", values.email);
    nextPage();
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ values }) => (
          <Form>
            <div className="flex flex-col gap-4">
              <h5 className="text-2xl font-semibold">{title}</h5>
              <div id="login-form" className="text-[12px] flex flex-col gap-4">
                <div className="username__textfield">
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full h-8 border-b-[1px] border-[#666] bg-transparent 
                              outline-none py-[6px] px-[10px] pl-0"
                    required
                    placeholder="อีเมล หรือ โทรศัพท์"
                  />
                </div>

                <div className="signup__container">
                  <span>ยังไม่มีบัญชีหรือ</span>
                  <a className="text-primary ml-1 hover:underline" href="/">
                    สร้างได้เลย!
                  </a>
                </div>

                <div className="flex items-center gap-1">
                  <button
                    type="submit"
                    className={`text-primary bg-transparent inline-flex items-center 
                             hover:underline focus:outline-none `}
                  >
                    <span>ลงชื่อเข้าใช้ด้วยรูปภาพ</span>
                  </button>
                  <button type="button" onClick={openModal}>
                    <QuestionMarkCircleIcon className="w-5 h-5 text-gray-300" />
                  </button>
                </div>
              </div>
              <div className="w-full flex justify-end gap-1">
                {/* <button type='button' id="prev-button" className="btn bg-secondary hover:bg-[#666]" onClick={() => console.log('click') }>ย้อนกลับ</button> */}
                <button
                  type="button"
                  id="next-button"
                  className="btn hover:bg-[#005596] disabled:bg-gray-300"
                  onClick={() => handleNextPage(values)}
                >
                  ถัดไป
                </button>
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
