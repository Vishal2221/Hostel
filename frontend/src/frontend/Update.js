
import { useParams, useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";






function Update() {

    // Define the state variables for the form fields
    const [Name, setName] = useState("");
    const [roomNumber, setRoomNumber] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [rollNumber, setRollNumber] = useState("");
    const [semester, setsemester] = useState("");
    const [Block, setBlock] = useState("");
    const [email, setEmail] = useState("");
    const Navigate = useNavigate()
    const params = useParams()


    useEffect(() => {
        console.log(params)
        getUser()
    }, [])



    const getUser = async () => {
        let result = await fetch(`http://localhost:5800/users/${params.id}`)
        result = await result.json()
        console.warn(result)

        setName(result.Name)
        setRoomNumber(result.roomNumber)
        setBlock(result.Block)
        setEmail(result.email)
        setPhoneNumber(result.phoneNumber)
        setRollNumber(result.rollNumber)
        setsemester(result.semester)


    }



    // Handle the form submission

    const updateUser = async () => {
        let result = fetch(`http://localhost:5800/users/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({ Name, roomNumber, email,Block,phoneNumber, rollNumber, semester }),
            headers: {
                'Content-Type': "application/json"
            }
        })
        Navigate('/Hostelirs')

    }


return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white shadow-lg rounded-lg">

            <h1 className="text-2xl font-bold text-center text-blue-400">
                Updation Form
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
                        htmlFor="Block"
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
                        type="text"
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
                        onClick={updateUser}
                        className="w-32 p-2 bg-gray-500 hover:bg-blue-400 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    </div>
);
}

export default Update;

