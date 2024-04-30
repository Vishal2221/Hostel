import Navbar from "./Navbar";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Mess() {

  const auth = localStorage.getItem("user");

  const [image, setImage] = useState()

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", image)

    const result = await axios.post(
      "http://localhost:5800/upload-image",
      formData, {
      headers: { "Content-Type": "multipart/form-data" },
    }
    )

  }



  const onInputChang = (e) => {
    console.log(e.target.files[0])
    setImage(e.target.files[0])
  }

  return (

    <>
      <Navbar />
      <div className="container inline-block ">

        <div className="p-2 ">

        </div>

        <div className="flex justify-evenly">
          <form>
            <input className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 mx-2 px-4 rounded inline-flex items-center h-10" type="file" accept="image/*" onChange={onInputChang}></input> 

            <button type="submit" className="bg-gray-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center h-10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-5 mx-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5" />
              </svg>
              <span>Upload</span>
            </button>
          </form>

        </div>
      </div>
    </>

  )
}
