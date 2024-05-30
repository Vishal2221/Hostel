import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function Navbar() {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();

  const logout = () => {
    console.log("logout");
    localStorage.clear();
    navigate("/Home");
  };

  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="bg-white  text-grey-800 p-4 flex shadow-md ">
      <div className="logo  ">
       
          <img
            className="float-left max-h-20"
            src="LOGO_50135-removebg-preview.png"
            alt=""
          />
        
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
            <li>
              {" "}
              <Link to="https://gcetjammu.edugrievance.com/">
                {" "}
                Grievance portal
              </Link>
            </li>
            <li>
              {auth ? (
                <Link to="/Home" onClick={logout}>
                  Log out
                </Link>
              ) : (
                <Link to="/NewLogin">Log in</Link>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="text-center text-xl font-mono font-bold ">
          {time.toLocaleTimeString()}
        </div>
        <div className="text-center text-xl font-mono font-bold">
          {time.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
