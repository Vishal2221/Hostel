import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useParams } from "react-router-dom";
import { faEnvelopeCircleCheck } from "@fortawesome/free-solid-svg-icons";

function StudentPage() {
  const navigate = useNavigate();
  const [showPasswordDiv, setShowPasswordDiv] = useState(false);
  const [newpassword, setnewPassword] = useState("");

  const Navigate = useNavigate();
  const params = useParams();

  const logout = () => {
    console.log("logout");
    localStorage.clear();
    navigate("/Home");
  };
  const [image, setImage] = useState(null);

  const auth = localStorage.getItem("user");

  // Define a function to handle the file input change
  const handleFileChange = (e) => {
    // Get the first file from the event target
    const file = e.target.files[0];

    // Check if the file is an image
    if (file && file.type.startsWith("image/")) {
      // Create a URL for the file object
      const url = URL.createObjectURL(file);

      // Set the image state to the URL
      setImage(url);
    } else {
      // Reset the image state to null
      setImage(null);
    }
  };

  const [allImage, setAllImage] = useState(null);
  useEffect(() => {
    getImage();
    return () => {
      // Cleanup function to reset states when component is unmounted
      setImage(null);
      setAllImage(null);
    };
  }, []);

  const getImage = async () => {
    try {
      const result = await axios.get("http://localhost:5800/get-image");
      console.log(result);
      setAllImage(result.data.data);
    } catch (error) {
      // Handle error during API call
      console.error("Error getting images:", error);
    }
  };

  async function changeUserPassword(userId, newPassword) {
    setShowPasswordDiv(!showPasswordDiv);
    try {
      const response = await fetch(
        `http://localhost:5800/users/${userId}/change-password`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newPassword: newPassword,
          }),
        }
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const showDIV = () => {
    setShowPasswordDiv(!showPasswordDiv);
  };

  return (
    <div>
      <div className="flex bg-blue-300 font-serif p-2 items-center justify-evenly m-0">
        <div className="logo ">
          <img
            className="float-left max-h-20"
            src="LOGO_50135-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="mx-auto ">
          <div className="self-start text-5xl">
            <h1>Boys Hostel GCET Jammu</h1>
          </div>
          <div>
            <ul className="flex space-x-5 text-lg font-sans">
              <li>
                <Link to="https://www.gcetjammu.org.in/"> College</Link>
              </li>
              <li>
                <Link to="/HostelStudents">Hosteliers</Link>
              </li>
              <li>
                <Link to="/Complaint">Feedback</Link>
              </li>
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
        <div className="float-right px-2 flex">
          <div className="mx-5 text-lg font-sans">
            <button
              className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline-purple focus:outline-none text-white  py-2 px-3 rounded-2xl"
              onClick={showDIV}
            >
              change password
            </button>
          </div>
          {showPasswordDiv && (
            <div className="flex flex-col">
              <input
                type="text"
                className="border-2 rounded"
                placeholder="enter new password"
                value={newpassword}
                onChange={(e) => setnewPassword(e.target.value)}
              ></input>
              <button
                className="shadow bg-blue-500 hover:bg-blue-400 focus:shadow-outline-purple focus:outline-none text-white px-0 my-1 rounded-2xl"
                onClick={() =>
                  changeUserPassword(JSON.parse(auth)._id, newpassword)
                }
              >
                submit
              </button>
            </div>
          )}
          <h4 className="mx-1">{JSON.parse(auth).Name}</h4>{" "}
          <h5 className="mx-1">
            {JSON.parse(auth).roomNumber}-{JSON.parse(auth).Block}
          </h5>
        </div>
      </div>

      <div className="flex container items-center h-screen  justify-evenly p-0">
       

        <div className="container w-75 h-75 mt-0">
          <div className="flex justify-center">
            <h3 className="">NOTICE BOARD !!</h3>
          </div>

          {Array.isArray(allImage) &&
            allImage.length > 0 &&
            allImage.map((data) => {
              return (
                <div key={data._id}>
                  <img src={require(`./images/${data.image}`)}></img>
                </div>
              );
            })}
        </div>

        {/* <Link to="/Complaint">
          <div className="p-8 h-54 w-48 rounded-2xl flex flex-col bg-green-400 items-center">
            <div className="flex justify-center">
              <FontAwesomeIcon icon={faEnvelopeCircleCheck} size="4x" />
            </div>
            <div className="flex justify-end items-end text-3xl">Message</div>
          </div>
        </Link> */}
      </div>
    </div>
  );
}

export default StudentPage;
