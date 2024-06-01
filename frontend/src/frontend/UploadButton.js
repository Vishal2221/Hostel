import React from "react";

const UploadButton = () => {
  function uploadFile() {}

  return (
    <>
      <div className="container flex justify-center">
        <input
          className="my-2"
          type="file"
          accept=".xlsx"
          onChange={(e) => uploadFile(e.target.files[0])}
          name="file"
          id="fileInput"
        />
        <button
          className="bg-gray-200 p-2.5 my-2 rounded-3xl hover:bg-green-300 hover:text-black "
          onClick="uploadFile()"
        >
          Upload XLSX File
        </button>
      </div>
    </>
  );
};

export default UploadButton;
