
import {  useNavigate } from "react-router-dom";

import React, { useState ,useEffect} from "react";



function RegistrationForm() {
  

  // Define the state variables for the form fields
  const [Name, setName] = useState("");
  const [roomNumber, setRoomNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [semester, setsemester] = useState("");
  const [email, setEmail]=useState("");
  const [Block ,setBlock]=useState("")

  const Navigate =useNavigate()


  useEffect(()=> {
    
    const auth = localStorage.getItem('user')
    if(auth){
      Navigate('/StudentPage')
    }
   })


  // Handle the form submission
  const collectData = async () => {
    console.log(Name,email, roomNumber, Block,phoneNumber, rollNumber, semester, );
    let result = await fetch("http://localhost:5800/register", {
      method: "post",
      body: JSON.stringify({
        Name,
        email,
        roomNumber,
        Block,
        phoneNumber,
        rollNumber,
        semester,
       
      }),
      headers: { "content-Type": "application/json" },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem("user",JSON.stringify(result))
    
      Navigate('/StudentPage')
    
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">
       
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Registration Form
        </h1>
        <form className="mt-4 space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={Name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-600"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>


          <div className="flex flex-col">
            <label
              htmlFor="roomNumber"
              className="text-sm font-medium text-gray-600"
            >
              Room Number
            </label>
            <input
              type="number"
              id="roomNumber"
              name="roomNumber"
              value={roomNumber}
              onChange={(e) => setRoomNumber(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="roomNumber"
              className="text-sm font-medium text-gray-600"
            >
              Block
            </label>
            <input
              type="text"
              id="Block"
              name="Block"
              value={Block}
              onChange={(e) => setBlock(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phoneNumber"
              className="text-sm font-medium text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="semester"
              className="text-sm font-medium text-gray-600"
            >
              Semester
            </label>
            <input
              type="text"
              id="semester"
              name="semester"
              value={semester}
              onChange={(e) => setsemester(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="rollNumber"
              className="text-sm font-medium text-gray-600"
            >
              Roll Number
            </label>
            <input
              type="number"
              id="rollNumber"
              name="rollNumber"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
              required
              className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
                 onClick={collectData}
              className="w-32 p-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
