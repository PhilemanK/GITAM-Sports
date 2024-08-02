import React from 'react'

const Sign_Up = () => {
  return (
    
       <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-4">Sign Up</h2>
        <div className="w-full mb-4">
          <img className="w-6 h-6 inline mr-2" src="src/assets/person.png" alt="Person Icon" />
          <input 
            className="border-b-2 border-gray-300 focus:border-purple-500 w-full py-1 outline-none" 
            type="text" 
            placeholder="Username" 
          />
        </div>
        <div className="w-full mb-4">
          <img className="w-6 h-6 inline mr-2" src="src/assets/email.png" alt="Email Icon" />
          <input 
            className="border-b-2 border-gray-300 focus:border-purple-500 w-full py-1 outline-none" 
            type="email" 
            placeholder="Email" 
          />
        </div>
        <div className="w-full mb-6">
          <img className="w-6 h-6 inline mr-2" src="src/assets/password.png" alt="Password Icon" />
          <input 
            className="border-b-2 border-gray-300 focus:border-purple-500 w-full py-1 outline-none" 
            type="password" 
            placeholder="Password" 
          />
        </div>
        <div className="w-full flex justify-between">
          <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
            Sign Up
          </button>
          <button className="text-purple-600 underline hover:text-purple-800">
            Log in
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default Sign_Up
