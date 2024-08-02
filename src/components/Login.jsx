import React from "react";
const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-indigo-500 to-purple-600">
      <div className="bg-white h-80 w-72 flex flex-col justify-center items-center rounded-lg shadow-lg p-4">
        <div className="text-3xl font-bold mb-4">Login</div>
        <div className="w-9 rounded-xl border-2 border-purple-500 mb-4"></div>
        <div className="flex items-center mb-4">
          <img src="src/assets/email.png" alt="Email icon" className="h-5 w-5 mr-2" />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-md px-2 py-1 w-full"
          />
        </div>
        <div className="flex items-center mb-6">
          <img src="src/assets/password.png" alt="Password icon" className="h-5 w-5 mr-2" />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-md px-2 py-1 w-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <button className="bg-purple-600 text-white py-2 px-4 rounded-md mb-2 hover:bg-purple-700">
            Sign Up
          </button>
          <div className="text-purple-600 hover:underline cursor-pointer">Log in</div>
        </div>
      </div>
    </div>
  );
};

export default Login;
