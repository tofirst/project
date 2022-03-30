import React from "react";

function ChoosePoint(props) {
  const {setPoint} = props


  function handleChange(e) {
    localStorage.setItem("point", e.currentTarget.value);
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center gap-4">
          <label htmlFor="point">Choose point:</label>
          <input
            className="rounded-full w-48 px-3 py-2 border focus:border-blue-500"
            id="point"
            type="number"
            min={4}
            max={7}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* <div className="mt-6">
          <button
            className="w-full rounded-full border bg-blue-500 px-6 py-2 text-white hover:border-blue-500 hover:bg-transparent 
                      hover:text-blue-500 disabled:bg-gray-300"
          >
            Confirm
          </button>
        </div> */}
      </div>
    </>
  );
}

export default ChoosePoint;
