import React from 'react';
import { Link, useLocation } from 'react-router-dom';  // Import useLocation

function BookInfoPage() {
    const location = useLocation();
    const book = location.state?.book;

    if (!book || !book.volumeInfo) {
        return <div>Loading...</div>;  // or return some other placeholder/loading state
      }

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{book.volumeInfo.title}</h2>
        <Link to="/" className="text-blue-500">Back to Home</Link>
      </div>
      <div className="flex mb-4">
        <img src={book.volumeInfo.imageLinks?.thumbnail} alt={`${book.volumeInfo.title} cover`} className="mr-4" />
        <div>
            <h3>{book.volumeInfo.title}</h3>
          <h3 className="text-xl font-bold">Author(s):</h3>
          <p>{book.volumeInfo.authors?.join(', ')}</p>
          <h3 className="text-xl font-bold mt-4">Published Date:</h3>
          <p>{book.volumeInfo.publishedDate}</p>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold">Description:</h3>
        <p>{book.volumeInfo.description}</p>
      </div>
    </div>
  );
}

export default BookInfoPage;
