import React, { useEffect, useMemo, useState } from "react";
import { Transition } from "@headlessui/react";
import {
  SigninPage,
  PasswordPage,
  SigninWithPicturePage,
} from "components/forms";

function Form() {
  const [page, setPage] = useState(0);
  const [showPage, setShowPage] = useState(null);
  const formTitles = useMemo(
    () => ["ลงชื่อเข้าใช้", "ใส่รหัสผ่าน", "ลงชื่อเข้าใช้ด้วยรูปภาพ"],
    []
  );

  const [email, setEmail] = useState("");

  const initialValues = useMemo(() => {
    return { email: localStorage.getItem("email") || "", password: "" };
  }, []);

  const handleNextPage = () => {
    setPage((currentPage) => currentPage + 1);
  };

  const handlePrevPage = () => {
    setPage((currentPage) => currentPage - 1);
  };

  const handleGoToPage = (page) => {
    setPage(page);
  };

  useEffect(() => {
    switch (page) {
      case 0:
        return setShowPage(
          <SigninPage
            title={formTitles[page]}
            initialValues={initialValues}
            setEmail={setEmail}
            nextPage={handleNextPage}
            goToPage={handleGoToPage}
          />
        );

      case 1:
        return setShowPage(
          <PasswordPage
            title={formTitles[page]}
            initialValues={initialValues}
            email={email}
            prevPage={handlePrevPage}
            goToPage={handleGoToPage}
          />
        );

      case 2:
        return setShowPage(
          <SigninWithPicturePage
            title={formTitles[page]}
            initialValues={initialValues}
            email={email}
            prevPage={handlePrevPage}
          />
        );

      default:
        break;
    }

    return () => {};
  }, [page, formTitles, initialValues, email]);

  return (
    <>
      <div className="h-full flex flex-col justify-center items-center gap-5">
        <div
          className="w-[480px] bg-white rounded-md shadow-md p-10 flex 
                      flex-col justify-center gap-5"
        >
          <Transition
            appear={true}
            show
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div>{showPage}</div>
          </Transition>
        </div>

        {/* <button type='button' onClick={() => setColor("#fe0000")} >Change border color</button> */}
      </div>
    </>
  );
}

export default Form;
