import React from 'react';

function Login() {
  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to Your Account</h2>
        <form action="/login" method="post">
          <div className="mb-4">
            <label className="block text-gray-700">Username or Email</label>
            <input type="text" name="username" className="w-full p-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input type="password" name="password" className="w-full p-2 border rounded-lg" required />
          </div>
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-lg">Login</button>
        </form>
        <a href="/forgot-password" className="text-sm text-blue-500 block text-center mt-4">Forgot Password?</a>
      </div>
    </div>
  );
}

export default Login;
