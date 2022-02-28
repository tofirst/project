import React, { useState } from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/solid";
import DialogModal from "components/DialogModal";
import PicturePasswordModal from "components/dialogs/PicturePasswordModal";
import Tabs from "components/Tab";
function Form() {
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
      <div className="h-full flex flex-col justify-center items-center gap-5">
        <div
          className="w-[420px] h-[300px] bg-white rounded-md shadow-md p-10 flex 
                      flex-col justify-center gap-5"
        >
          <h5 className="text-2xl font-semibold">ลงชื่อเข้าใช้</h5>
          <form
            id="login-form"
            action=""
            className="text-[12px] flex flex-col gap-4"
          >
            <div className="username__textfield">
              <input
                type="email"
                id="username-field"
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

            <div className="w-full flex justify-end gap-1">
              {/* <button type='button' id="prev-button" className="btn bg-secondary hover:bg-[#666]" onClick={() => console.log('click') }>ย้อนกลับ</button> */}
              <button
                type="submit"
                id="next-button"
                className="btn hover:bg-[#005596]"
              >
                ถัดไป
              </button>
            </div>
          </form>
        </div>
        {/* <button type='button' onClick={() => setColor("#fe0000")} >Change border color</button> */}
      </div>

      <DialogModal isOpen={isOpen} closeModal={closeModal} />

      <PicturePasswordModal
        isOpen={pictureOpen}
        closeModal={closePictureModal}
      />
    </>
  );
}

export default Form;
