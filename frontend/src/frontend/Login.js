import  { useState } from "react";

import {  Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [username, UserUpdate] = useState("");
  const [password, setPassword] = useState("");

  const proceedLogin =  async() => {
    console.log(username, password)
    
    let result = await fetch ('http://localhost:5800/login',{
      method:'post',
      body:JSON.stringify({username,password}),
      headers:{
        'Content-Type':'application/json'

      }
    })
    result = await result.json()
    console.log(result)
    if(result.username){
      localStorage.setItem("user",JSON.stringify(result))
      navigate('/Warden')

    }else {
      navigate('/home')
    }

    
  };

  return (
    <div className=" flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-xs ">
        <form
          
          className="px-8 pt-6 pb-8 mb-4 bg-gray-200 z-10 rounded shadow-md"
        >
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              for="Admin"
            >
              User Name
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
              id="Admin"
              type="text"
              value={username}
              placeholder="Enter your User Name"
              required
              onChange={(e) => UserUpdate(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block mb-2 text-sm font-bold text-gray-700"
              for="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none"
              id="password"
              type="password"
              value={password}
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 shadow-md rounded hover:bg-blue-700 focus:outline-none"
              type="button"
              onClick={proceedLogin}
            >
              Submit
            </button>
            <Link to="/RegistrationForm">
              <button
                className="px-4 py-2 ml-4 font-bold text-white bg-green-500 shadow-md rounded hover:bg-green-700 focus:outline-none"
                type="button"
              >
                Register
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
