import Navbar from "./Navbar";

import image from "./images/hostel1.jpg";

import React from "react";

function Home() {
  return (
    <>
      <Navbar />

      <div
        className=""
        style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" }}
      >
        <div className="h-screen flex items-center justify-center ">
          <div className=" bg-gray-800/[0.4] rounded-2xl text-white  ">
            <h1 className="text-4xl font-bold  text-center">Contact us</h1>
            <div className="flex justify-evenly space-x-5 ">
              <div className="p-3  flex flex-col items-center">
                <h4 className="underline">Warden</h4>
                <h5>Dr. Vikesh Kumar</h5>
                <h6>9697327153</h6>
              </div>
              <div className="p-3 flex flex-col items-center">
                <h4 className="underline"> Asst. Warden</h4>
                <h5>Om Prakash Sharma</h5>
                <h6>9906189933</h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" flex container items-center h-screen  justify-evenly my-auto">

         <div className="h-65 w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center ">
                <img className="h-48 w-48 rounded-full object-cover" src={image} alt="User Image" />
                    <h3 className="text-lg font-bold mt-5"> name</h3>
                    <p className="text-gray-500">Warden</p>
                    <p className="text-gray-500">phone number</p>
                    
                </div>

                <div className="h-65 w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center ">
                <img className="h-48 w-48 rounded-full object-cover" src={image} alt="User Image" />
                    <h3 className="text-lg font-bold mt-5">name name</h3>
                    <p className="text-gray-500">position</p>
                    <p className="text-gray-500">phone number</p>
                    
                </div>

                <div className="h-65 w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center ">
                <img className="h-48 w-48 rounded-full object-cover" src={image} alt="User Image" />
                    <h3 className="text-lg font-bold mt-5">name name</h3>
                    <p className="text-gray-500">position</p>
                    <p className="text-gray-500">phone number</p>
                    
                </div>
                </div>


                <div className="gaurds  flex container items-center h-screen  justify-evenly ">

                <div className="h-65 w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center ">
                <img className="h-48 w-48 rounded-full object-cover" src={image} alt="User Image" />
                    <h3 className="text-lg font-bold mt-5">name name</h3>
                    <p className="text-gray-500">position</p>
                    <p className="text-gray-500">phone number</p>
                    
                </div>

                <div className="h-65 w-64 bg-white shadow-lg rounded-lg p-4 flex flex-col items-center ">
                <img className="h-48 w-48 rounded-full object-cover" src={image} alt="User Image" />
                    <h3 className="text-lg font-bold mt-5">name name</h3>
                    <p className="text-gray-500">position</p>
                    <p className="text-gray-500">phone number</p>
                    
                </div>
                </div>  */}
    </>
  );
}
export default Home;
