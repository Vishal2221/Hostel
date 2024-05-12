import Footer from "./Footer";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Complaint() {
  const [text, setText] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5800/sendText", {
      method: "post",
      body: JSON.stringify({
        text
      }),
      headers: { "content-Type": "application/json" },
    });

    if (response.ok) {
      console.log("Text message sent successfully");
      Navigate('/StudentPage')
    } else {
      console.log("Error sending text message");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-screen">
        <form className="bg-white p-6 rounded-lg shadow-md w-96" onSubmit={handleSubmit}>
          <select className="w-full mb-4 p-2 border rounded-md">
            <option value="service">Service</option>
            <option value="complaint">Complaint</option>
          </select>
          <textarea
            className="w-full h-32 p-2 border rounded-md resize-y"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write here"
          ></textarea>
          <button
            className="w-full py-2 px-4 mt-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Complaint;