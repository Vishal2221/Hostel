import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    console.log("logout");
    localStorage.clear();
    navigate("/Home");
  };

  return (
    <div className="bg-white  text-grey-800 p-4 flex shadow-md">
      <div className="logo  fixed">
        <Link to="/home">
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

        <div className="flex justify-center ">
          <ul className="flex space-x-5 text-lg font-sans">
            <li>
              <Link to="https://www.gcetjammu.org.in/"> College</Link>
            </li>
            <li> <Link to="https://gcetjammu.edugrievance.com/"> Grievance portal</Link></li>
            <li>
              {auth ? (
                <Link to="/Home" onClick={logout}>
                  Log out
                </Link>
              ) : (
                <Link to="/Login">Log in</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
