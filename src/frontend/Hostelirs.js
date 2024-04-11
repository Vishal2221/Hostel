// src/components/StudentsTable.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Typography } from '@material-tailwind/react';
import Navbar from './Navbar';
import Footer from './Footer';

const Hostelirs = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // Fetch student data from your backend API (replace with your actual API endpoint)
    axios.get('http://localhost:8000/student')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
    <Navbar/>
    <Card className="h-full w-full overflow-scroll">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                Name
              </Typography>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                Room
              </Typography>
            </th>

            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                phone
              </Typography>
            </th>

            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                semester
              </Typography>
            </th>

            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                roll number
              </Typography>
            </th>

            <th className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
              <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                Fee
              </Typography>
            </th>
            {/* Add other table headers (Roll Number, Fee Paid, Phone, Semester) */}
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student._id}>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {student.Name} 
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {student.roomNumber}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {student.phoneNumber}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {student.semester}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {student.rollNumber}
                </Typography>
              </td>
              <td className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {student.Fee}
                </Typography>
              </td>
              {/* Add other table cells (Roll Number, Fee Paid, Phone, Semester) */}
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
    <Footer/>

    </>
  );
};

export default Hostelirs;

