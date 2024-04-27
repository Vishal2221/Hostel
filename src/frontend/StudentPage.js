import Footer from "./Footer";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGear } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";

function StudentPage() {
  const [image, setImage] = useState(null);

  const auth = localStorage.getItem("user");

  // Define a function to handle the file input change
  const handleFileChange = (e) => {
    // Get the first file from the event target
    const file = e.target.files[0];

    // Check if the file is an image
    if (file && file.type.startsWith("image/")) {
      // Create a URL for the file object
      const url = URL.createObjectURL(file);

      // Set the image state to the URL
      setImage(url);
    } else {
      // Reset the image state to null
      setImage(null);
    }
  };

  return (
    <div>
      <div className="flex bg-blue-300 font-serif p-2 items-center justify-evenly">
        <div className="logo ">
          <img
            className="float-left max-h-20"
            src="LOGO_50135-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="mx-auto">
          <div className="self-start text-5xl">
            <h1>Boys Hostel GCET Jammu</h1>
          </div>
          <div >
            <ul className="flex space-x-5 text-lg font-sans">
              <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
                <Link to="https://www.gcetjammu.org.in/"> College</Link>
              </li>
              <li>
                <Link to="/Mess"> Mess</Link>
              </li>
             
            </ul>
          </div>
         
        </div>
        <div className="float-right px-2"><h4>{JSON.parse(auth).Name}</h4></div>
      </div>

      <div className="flex container items-center h-screen  justify-evenly my-auto">
        <div className="h-65 w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center ">
          <img
            className="h-48 w-48 rounded-full object-cover"
            src={image}
            alt="User Image"
          />
          <h3 className="text-lg font-bold mt-5">{JSON.parse(auth).Name}</h3>
          <p className="text-gray-500">{JSON.parse(auth).roomNumber}</p>
          <input
            className="mx-auto w-48 overflow-hidden"
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>

        <Link to="/Complaint">
          {" "}
          <div className="p-8 h-54 w-48 rounded-2xl flex flex-col bg-green-400 items-center">
            <div className="flex justify-center">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="4x" />
            </div>
            <div className="flex justify-end items-end text-3xl">Message</div>
          </div>
        </Link>

        {/* <Link to="/Complaint"><div className="p-8 h-54 w-48 rounded-2xl flex flex-col bg-green-500 items-center">
                    <div className="flex  justify-center">
                        <FontAwesomeIcon icon={faUserGear} size="4x" />
                    </div>
                    <div className="flex justify-end items-end text-3xl">services</div>
                </div></Link> */}
      </div>

      <Footer />
    </div>
  );
}

export default StudentPage;
