import Navbar from "./Navbar";
import React from 'react';
import ProgressBar from "./ProgressBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { Outlet, Link } from "react-router-dom";


function Warden() {

    return (
        <>

            <Navbar />



            <div className="flex justify-center items-center py-2">
                <h1 className="text-yellow-500">ADMIN ACCESS !!!</h1>
            </div>




            <div className="flex justify-evenly mt-20">


                <Link to="/Messages" >
                    <div className=" flex flex-col items-center">
                        <div className="flex justify-center">
                            <FontAwesomeIcon icon={faBell} size="4x" />
                        </div>
                        <div className="flex justify-end items-end text-3xl">Messages</div>
                    </div>
                </Link>

                <Link to="/Hostelirs">

                    <div className=" flex flex-col items-center">
                        <div className="flex justify-center">
                            <FontAwesomeIcon icon={faUsers} size="4x" />
                        </div>
                        <div className="flex justify-end items-end text-3xl">Hosteliers</div>
                    </div>

                </Link>



                <Link to="/Mess">
                    <div className=" flex flex-col items-center">
                        <div className="flex justify-center">
                            <FontAwesomeIcon icon={faUtensils} size="4x" />
                        </div>
                        <div className="flex justify-end items-end text-3xl">Mess</div>
                    </div>
                </Link>



            </div>







        </>






    )

}

export default Warden