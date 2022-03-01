import React, { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import DialogModal from "components/DialogModal";
import PicturePasswordModal from "components/dialogs/PicturePasswordModal";

import { Field } from "formik";

function SigninPage(props) {
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

  function openPictureModal() {
    setPictureOpen(true);
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <h5 className="text-2xl font-semibold">เข้าสู่ระบบ</h5>
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
              type="button"
              onClick={openPictureModal}
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
          <button
            type="submit"
            id="next-button"
            className="btn hover:bg-[#005596] disabled:bg-gray-300"
          >
            ถัดไป
          </button>
        </div>
      </div>

      <DialogModal isOpen={isOpen} closeModal={closeModal} />

      <PicturePasswordModal
        isOpen={pictureOpen}
        closeModal={closePictureModal}
      />
    </>
  );
}

export default SigninPage;
