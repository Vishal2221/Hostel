// src/components/StudentsTable.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Typography } from "@material-tailwind/react";
import { Link, Navigate } from "react-router-dom";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import UploadButton from "./UploadButton";

const Hostelirs = () => {

  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [showUploadDiv, setShowUploadDiv] = useState(false);

  useEffect(() => {
    // Fetch student data from your backend API (replace with your actual API endpoint)
    axios
      .get("http://localhost:5800/getData")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const deleteUser = async (id) => {
    let result = await fetch(`http://localhost:5800/users/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      alert(" deleted");

    }

    console.warn(id);
  };

  function addsingle () {
    navigate('/RegistrationForm')
  }

  const handleAddMultiple = () => {
    setShowUploadDiv(!showUploadDiv);
  };
  return (
    <>
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
          <div>
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
        
      </div>
      <div className="m-2 ">  <button
          className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out mb-2"
          onClick={() => Navigate(-1)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button></div>
    

      <div className="flex justify-evenly">
        <Card className="h-70 w-70 my-10 overflow-scroll">
          <table className=" table-auto text-left">
            <thead>
              <tr>

                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Room
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Block
                  </Typography>
                </th>

                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Name
                  </Typography>
                </th>
                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    phone
                  </Typography>
                </th>

                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    semester
                  </Typography>
                </th>

                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    roll number
                  </Typography>
                </th>

                <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Operation
                  </Typography>
                </th>

                {/* Add other table headers (Roll Number, Fee Paid, Phone, Semester) */}
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student._id}>

                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.roomNumber}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.Block}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.Name}
                    </Typography>
                  </td>

                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.phoneNumber}
                    </Typography>
                  </td>



                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.semester}
                    </Typography>
                  </td>
                  <td className="p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {student.rollNumber}
                    </Typography>
                  </td>

                  <td className="p-4 flex justify-evenly">
                    <button className="bg-gray-300 px-2 py-2 rounded-3xl hover:bg-black hover:text-white" type="submit" onClick={() => deleteUser(student._id)}>
                      Delete
                    </button>

                    <Link to={"/Update/" + student._id} className="p-2 ">
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>
      </div>

      <div className=" border-t-2 mx-20 flex justify-center items-center">
        <h4 className="text-blue-500">ADD STUDENTS</h4><br />

      </div>
      <div className="flex justify-center space-x-48 py-5">
        <button onClick={ addsingle} className="bg-gray-300 px-3 py-3 rounded-3xl hover:bg-blue-200 hover:text-black ">ADD SINGLE</button>
        <button  onClick={ handleAddMultiple} className="bg-gray-300 px-3 py-3 rounded-3xl  hover:bg-blue-200 hover:text-black ">ADD MULTIPLE</button>
      </div>
      {showUploadDiv && (
      <div className="border-t-2 mx-20 flex justify-center items-center">
        <UploadButton state="false"/>
      </div>)}

      <Footer />
    </>
  );
};

export default Hostelirs;
