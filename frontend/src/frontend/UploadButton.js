import React, { useState } from 'react';


const UploadButton = () => {
  const [file, setFile] = useState(null);
  


  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
     
    };
    fileReader.readAsDataURL(uploadedFile);
    
  };

  const handleUpload = async () => {
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await fetch('/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('File uploaded successfully!');
        } else {
          console.error('Error uploading file:', response.status);
        }
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    } else {
      console.log('Please select a file to upload.');
    }

  };

  return (

    <>



      <div className="container flex justify-center">

        <input className='my-2' type="file" accept=".xlsx" onChange={handleFileChange} />
        <button
          className='bg-gray-200 p-2.5 my-2 rounded-3xl hover:bg-green-300 hover:text-black '
          onClick={
            handleUpload

          }
        >
          Upload XLSX File
        </button>
       
      </div>

    </>
  );
};

export default UploadButton;