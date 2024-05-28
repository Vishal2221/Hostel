import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";

export default function Messages() {
  const [Data, setData] = useState([]);

  useEffect(() => {
    // Fetch student data from your backend API (replace with your actual API endpoint)
    axios
      .get("http://localhost:5800/getMessages")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <Navbar></Navbar>
      <div className="flex justify-evenly">
        <div className="text-divs-container"></div>
      </div>
    </>
  );
}
