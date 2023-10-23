import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-white p-6 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <div className="font-bold text-2xl">BookManager</div>
          <nav>
            <Link to="/login" className="text-blue-500 ml-4">Login</Link>
            <Link to="/signup" className="bg-blue-500 text-white ml-4 px-4 py-2 rounded-lg">Sign Up</Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Manage and Discover Books Effortlessly</h1>
          <p className="mb-6">Track your reading progress, discover new books, and meet your learning goals with BookManager.</p>
          <a href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Get Started</a>
          <Link to="/scanner" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Scan a Book</Link>
          <Link to="/cover-scanner" className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">Scan Cover</Link>  {/* Link to CoverScanner */}

        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Features</h2>
          <div className="flex flex-wrap justify-center">
            {/* ... Repeat this block for multiple features ... */}
            <div className="w-full md:w-1/3 p-4">
              <div className="bg-blue-100 p-6 rounded-lg">
                <h3 className="font-bold mb-2">Organize Your Library</h3>
                <p>Easily categorize and manage your books.</p>
              </div>
            </div>
            {/* ... */}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">What Our Users Say</h2>
          <div className="flex flex-wrap justify-center">
            {/* ... Repeat this block for multiple testimonials ... */}
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <p className="mb-4">"BookManager has revolutionized my reading experience!"</p>
              <div className="font-bold">- Happy User</div>
            </div>
            {/* ... */}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-white p-6">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            &copy; {new Date().getFullYear()} BookManager
          </div>
          <nav>
            <a href="/privacy" className="text-gray-700 ml-4">Privacy Policy</a>
            <a href="/terms" className="text-gray-700 ml-4">Terms of Service</a>
            <a href="/contact" className="text-gray-700 ml-4">Contact Us</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
