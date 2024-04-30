import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

export default function Messages() {
  const [textData, setTextData] = useState([]);

  useEffect(() => {
    // Fetch data from the API (replace with your actual API call)
    fetch("http://localhost:5800/getText")
      .then((response) => response.json())
      .then((data) => setTextData(data));
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-evenly">
        <div className="text-divs-container">
          {textData.map((text, index) => (
            <div key={index} className="text-div">
              {text}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
