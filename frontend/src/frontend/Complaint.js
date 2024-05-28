import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Complaint = () => {
  const [textMessage, setTextMessage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const auth = localStorage.getItem("user");

  const Navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(JSON.parse(auth)._id, textMessage);
  };

  const sendMessage = async (userId, textMessage) => {
    try {
      const response = await fetch(`http://localhost:5800/sendMessage/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ textMessage })
        

      });

      if (!response.ok) {
        throw new Error(`Error sending message: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();
      if(response){
        Navigate("/StudentPage")
      }
      
      setTextMessage("");
      setSelectedOption("");
      
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Navbar/>
      <div className="container flex justify-center mt-10 ">
        <form className="bg-gray-100 p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
          <select
            className="w-full mb-4 p-2 border rounded-md"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value="service">Service</option>
            <option value="complaint">Complaint</option>
          </select>
          <textarea
            className="w-full h-32 p-2 border rounded-md resize-y"
            value={textMessage}
            onChange={(e) => setTextMessage(e.target.value)}
            placeholder="Write here"
          />
          <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Complaint;