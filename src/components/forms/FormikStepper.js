import React, { useState } from "react";
import { Form, Formik } from "formik";

function FormikStepper({ children, ...props }) {
  const childrenArray = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentChild = childrenArray[step];

  return (
    <Formik
      {...props}
      onSubmit={async (values, helpers) => {
        await props.onSubmit(values, helpers);
        setStep((prevStep) => prevStep + 1);
      }}
    >
      <Form autoComplete="off">
        <div className="flex flex-col gap-4">
          {currentChild}

          {/* <div className="w-full flex justify-end gap-1">
            <button
              type="submit"
              id="next-button"
              className="btn hover:bg-[#005596] disabled:bg-gray-300"
            >
              {step === 0 ? "ถัดไป" : "ลงชื่อเข้าใช้"}
            </button>
          </div> */}
        </div>
      </Form>
    </Formik>
  );
}

export default FormikStepper;
