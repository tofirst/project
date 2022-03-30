import React, { useState } from "react";

function UploadPicture() {
  const [previewImg, setPreviewImg] = useState(
    ""
  );

    const handleSetImage = (e) => {
      setPreviewImg(URL.createObjectURL(e.target.files[0]))
      localStorage.setItem("imgUrl", URL.createObjectURL(e.target.files[0]))
    }


  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div
          className="flex h-96 w-96 flex-col items-center justify-center gap-3 rounded-2xl 
                        border border-dashed border-blue-500"
        >
          <img
            src={previewImg}
            alt=""
            onerror="this.onerror=null;this.src='https://placeimg.com/200/300/animals';"
            className="h-96 w-96 rounded-2xl object-cover"
          />
          <input
            type="file"
            name="chooseimgUrl"
            id="chooseimgUrl"
            accept="image/*"
            className="hidden"
            onChange={(e) => handleSetImage(e)}
          />
        </div>

        <div className="mt-6">
          <label
            htmlFor="chooseimgUrl"
            className="w-full rounded-full border bg-blue-500 px-6 py-2 text-white 
                    hover:border-blue-500 hover:bg-transparent 
                      hover:text-blue-500 disabled:bg-gray-300"
          >
            Choose picture
          </label>
        </div>
      </div>
    </>
  );
}

export default UploadPicture;
