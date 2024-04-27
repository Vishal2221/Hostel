import React from 'react'
import {  Link } from "react-router-dom";
  
export default function Mess() {

  
  const auth = localStorage.getItem("user");
  return (
    <div>
       <div className="bg-white  text-grey-800 p-4 flex  shadow-md">
      <div className="logo  fixed">
        <Link to="/Login">
          <img
            className="float-left max-h-20"
            src="LOGO_50135-removebg-preview.png"
            alt=""
          />
        </Link>
      </div>

      <div className="mx-auto space-y-4 ">
        <div className="self-start text-5xl">
          <h1>Boys Hostel GCET Jammu</h1>
        </div>

        <div className=" ">
          <ul className="flex space-x-5 text-lg font-sans">
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <Link to="https://www.gcetjammu.org.in/"> College</Link>
            </li>
           
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}
