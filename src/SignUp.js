import React from 'react';

function SignUp() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>
        <form action="/signup" method="post">
          <div className="mb-4">
            <label className="block text-gray-700">Username</label>
            <input type="text" name="username" className="w-full p-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input type="email" name="email" className="w-full p-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" name="password" className="w-full p-2 border rounded-lg" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
