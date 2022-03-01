import React, { useState, useEffect } from "react";
import DialogModal from "components/DialogModal";
import PicturePasswordModal from "components/dialogs/PicturePasswordModal";
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";

import { Formik, Form } from "formik";
import bcrypt from "bcryptjs";
// import axios from "axios";

// SEED should be created ONE TIME upon sign up
const seed = bcrypt.genSaltSync(10);

function SigninWithPicturePage(props) {
  const { title, initialValues, prevPage } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [pictureOpen, setPictureOpen] = useState(false);

  const [passwordStep, setPasswordStep] = useState(0);
  const [password, setPassword] = useState("");

  // const handleLogin = async (password) => {
  //   try {
  //     const res = await axios.get(
  //       "localhost:8000/user/" + localStorage.getItem("email")
  //     );
  //     if (res.data.password === password) {
  //       alert("Match");
  //     } else {
  //       alert("Invalid password");
  //     }
  //   } catch (error) {
  //     alert("Error");
  //   }
  // };

  useEffect(() => {
    if (passwordStep === 3) {
      const hashedPassword = bcrypt.hashSync(
        password,
        "$2a$10$CwTycUXWue0Thq9StjUM0u"
      ); // hash created previously created upon sign up
      alert(`Reach 3 point and password is ${hashedPassword}`);
      // handleLogin(hashedPassword);
      setPasswordStep(0);
      setPassword("");
      // window.location.href = "/home";
    }
  }, [passwordStep, password]);

  const handleSetPassword = (newPoint) => {
    setPasswordStep((prev) => prev + 1);
    setPassword((prevPassword) => prevPassword + newPoint);
  };

  console.log(seed);

  // const handleSavePassword = () => {

  // };

  function closeModal() {
    setIsOpen(false);
  }

  function closePictureModal() {
    setPictureOpen(false);
  }

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        onSubmit={(values) => alert(values)}
      >
        <Form>
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex gap-1 items-center justify-start">
              <button
                onClick={prevPage}
                className="rounded-full w-6 h-6 inline-flex justify-center 
                            items-center hover:bg-gray-200 "
              >
                <ArrowNarrowLeftIcon className="w-4 h-4 text-[#aca9a9]" />
              </button>
              <span className="align-middle">
                <h6 className="text-base font-light leading-3">
                  {localStorage.getItem("email")}
                </h6>
              </span>
            </div>
            <h5 className="text-2xl font-semibold">{title}</h5>
            <div className="flex justify-center items-center">
              <div className="relative flex flex-col justify-center items-center overflow-hidden shadow-sm w-96 h-96">
                <img
                  src={localStorage.getItem("imgPasswordUrl")}
                  alt="password preview"
                  className="object-cover w-96 h-96"
                />
                <div className="z-10 absolute flex flex-wrap">
                  {[...Array(576).keys()].map((index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleSetPassword(index)}
                      className="m-0 w-4 h-4 bg-red-300 bg-opacity-25 hover:bg-red-400"
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Form>
      </Formik>

      <DialogModal isOpen={isOpen} closeModal={closeModal} />

      <PicturePasswordModal
        isOpen={pictureOpen}
        closeModal={closePictureModal}
      />
    </>
  );
}

export default SigninWithPicturePage;
