import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import SignUp from './SignUp';
import Login from './Login';
import Profile from './Profile';
import Scanner from './Scanner';  // Import the Scanner component
import BookInfoPage from './BookInfoPage';  // Import the BookInfoPage component
import CoverScanner from './CoverScanner';  // Import the CoverScanner component



function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/scanner" element={<Scanner onScan={(barcode) => console.log(barcode)} />} />
        <Route path="/book-info" element={<BookInfoPage />} />
        <Route path="/cover-scanner" element={<CoverScanner />} />  {/* New Route for CoverScanner */}

      </Routes>
    </BrowserRouter>
  );
}

export default Router;
