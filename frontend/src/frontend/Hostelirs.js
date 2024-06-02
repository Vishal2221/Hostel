import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Typography } from "@material-tailwind/react";
import { Link, Navigate } from "react-router-dom";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import UploadButton from "./UploadButton";
import BackButton from "./BackButton";
import Navbar from "./Navbar";

const Hostelirs = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const [showUploadDiv, setShowUploadDiv] = useState(false);

  function getData() {
    // Fetch student data from your backend API (replace with your actual API endpoint)
    axios
      .get("http://localhost:5800/getData")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = async (id) => {
    let result = await fetch(`http://localhost:5800/users/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getData();
      alert("Deleted Student Successfully");
    }

    console.warn(id);
  };

  function addsingle() {
    navigate("/RegistrationForm");
  }

  const handleAddMultiple = () => {
    setShowUploadDiv(!showUploadDiv);
  };

  return (
    <>
      <Navbar />
      <BackButton />

      <div className="flex justify-start flex-col items-center min-h-[40vh] max-h-[60vh] gap-3 w-auto">
        <h2 className="underline text-[#A91D3A]">Students Data</h2>
        {Array.isArray(students) && students.length > 0 ? (
          <Card className="rounded-none w-[90vw] mb-[4rem] overflow-scroll ">
            <table className=" table-auto text-center border border-black">
              <thead>
                <tr>
                  <th className="border-b border-black bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none "
                    >
                      S. No.
                    </Typography>
                  </th>
                  <th className="border-b border-black bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none "
                    >
                      Name
                    </Typography>
                  </th>
                  <th className="border-b border-black bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none "
                    >
                      Room
                    </Typography>
                  </th>
                  <th className="border-b border-black bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none "
                    >
                      Block
                    </Typography>
                  </th>

                  <th className="border-b border-black bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none "
                    >
                      Phone No.
                    </Typography>
                  </th>

                  <th className="border-b border-black bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none "
                    >
                      Semester
                    </Typography>
                  </th>

                  <th className="border-b border-black bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none "
                    >
                      Roll Number
                    </Typography>
                  </th>
                  <th className="border-b border-black bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none "
                    >
                      Address
                    </Typography>
                  </th>

                  <th className="border-b border-black bg-blue-gray-50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold leading-none "
                    >
                      Operation
                    </Typography>
                  </th>

                  {/* Add other table headers (Roll Number, Fee Paid, Phone, Semester) */}
                </tr>
              </thead>
              <tbody>
                {students?.map((student, index) => (
                  <tr key={student._id}>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {index + 1}
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
                        {student.RoomNumber}
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
                        {student.PhoneNumber}
                      </Typography>
                    </td>

                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {student.Semester}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {student.RollNumber}
                      </Typography>
                    </td>
                    <td className="p-4">
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {student.Address}
                      </Typography>
                    </td>

                    <td className="p-4 flex justify-evenly">
                      <button
                        className="bg-gray-300 px-2 rounded-lg hover:bg-black hover:text-white"
                        type="submit"
                        onClick={() => deleteUser(student._id)}
                      >
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
        ) : (
          <p>No student data available. Please add some students.</p>
        )}
      </div>

      <div className=" border-t-2 mx-20 flex justify-center items-center">
        <h4 className="text-blue-500 pt-2 underline">ADD STUDENTS</h4>
        <br />
      </div>
      <div className="flex justify-center space-x-48 pt-4 pb-10">
        <button
          onClick={addsingle}
          className="bg-gray-300 px-3 py-2 rounded-lg hover:bg-blue-200 hover:text-black "
        >
          ADD SINGLE
        </button>
        <button
          onClick={handleAddMultiple}
          className="bg-gray-300 px-3 py-2 rounded-lg  hover:bg-blue-200 hover:text-black "
        >
          ADD MULTIPLE
        </button>
      </div>
      {showUploadDiv && (
        <div className="border-t-2 mx-20 flex justify-center items-center">
          <UploadButton getData={getData} setShowUploadDiv={setShowUploadDiv} />
        </div>
      )}

      <Footer />
    </>
  );
};

export default Hostelirs;
