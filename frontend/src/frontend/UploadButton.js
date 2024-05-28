import React, { useState } from "react";
import * as XLSX from "xlsx";
import { useNavigate } from "react-router-dom";

const UploadButton = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: "array" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);

      // Send the data to the server to store in the database
      fetch("/api/upload-xlsx", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
       .then((response) => response.json())
       .then((data) => console.log("Data uploaded successfully!"))
       .catch((error) => console.error("Error uploading data:", error));
    };
    reader.readAsArrayBuffer(selectedFile);
  };

  return (
    <>
      <div className="container flex justify-center">
        <input
          className="my-2"
          type="file"
          accept=".xlsx"
          onChange={handleFileChange}
        />
        <button
          className="bg-gray-200 p-2.5 my-2 rounded-3xl hover:bg-green-300 hover:text-black "
          onClick={handleUpload}
        >
          Upload XLSX File
        </button>
      </div>
    </>
  );
};

export default UploadButton;