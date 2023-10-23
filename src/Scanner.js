import React, { useEffect, useState } from 'react';
import Quagga from 'quagga';
import { fetchBookData } from './bookAPI';
import { useNavigate } from 'react-router-dom';  // Import useNavigate


function Scanner() {
    const [book, setBook] = useState(null);  // Define book here
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  useEffect(() => {
    Quagga.init({
      inputStream: {
        type: "LiveStream",
        constraints: {
          width: 640,
          height: 480,
          facingMode: "environment" // or user
        },
        target: document.querySelector('#scanner') // Select the scanner element
      },
      decoder: {
        readers: ["ean_reader"] // Barcode type EAN is commonly used for books
      }
    }, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      Quagga.start();
    });

    Quagga.onDetected(async (data) => {
        const barcode = data.codeResult.code;
        Quagga.stop();  // Stop scanning after a barcode is detected

        try {
            const query = `isbn:${barcode}`;
            const bookInfo = await fetchBookData(query);  // Use fetchBookData
            navigate('/book-info', { state: { book: bookInfo } });  // Corrected line
        } catch (err) {
            setError('Failed to fetch book info');
            console.error(err);
          }
        });

    return () => {
      Quagga.offDetected();  // Cleanup
    };
  }, [navigate]);

  return (
    <div id="scanner" className="scanner">
      {/* Scanner will render here */}
      {book && (
        <div className="book-info">
          <h3>{book.volumeInfo.title}</h3>
          <p>{book.volumeInfo.description}</p>
          {/* ... other book info ... */}
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default Scanner;
