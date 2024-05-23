import React from 'react'
import { useNavigate } from "react-router-dom";

function NotAllowed() {

    const Navigate = useNavigate();
  return (

    <>
      <div className='bg-yellow-600 flex items-center justify-center '>
      <div className="m-2 ">  <button
        className="text-gray-600 hover:text-gray-900 transition duration-300 ease-in-out mb-2"
        onClick={() => Navigate(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 24"
          stroke="currentColor"
          className="w-24 h-24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button></div>
     
        <div className=' flex items-center justify-center min-h-screen'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-48 h-48">
  <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" />
</svg>
<h3 className='text-gray-600'>page not found !!!</h3>

        </div>

      </div>
    </>
    
  )
}

export default NotAllowed