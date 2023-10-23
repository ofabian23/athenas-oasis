import React, { useState } from 'react';
import axios from 'axios';
import { fetchBookData } from './bookAPI';  // Import fetchBookData
import { useNavigate } from 'react-router-dom';  // Import useNavigate

function CoverScanner() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();  // Initialize useNavigate

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleScan = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    try {
      const imageResponse = await axios.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });

      const imageUri = imageResponse.data.uri;  // Assuming the image URI is returned from your server

      const visionResponse = await axios.post('https://vision.googleapis.com/v1/images:annotate?key=AIzaSyDHq9Ovv9y5HqPW_KsA0cE1lZvtltDLeGI', {
        requests: [{
          image: { source: { imageUri } },
          features: [{ type: 'WEB_DETECTION' }]
        }]
      });

      const bookInfo = visionResponse.data.responses[0].webDetection.webEntities[0];
      if (bookInfo) {
        const query = bookInfo.description;
        const detailedBookInfo = await fetchBookData(query);  // Use fetchBookData
        navigate('/book-info', { state: { book: detailedBookInfo } });
    } else {
        console.error('No book info found from cover scan');
      }
    } catch (error) {
      console.error('Error scanning cover:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleScan}>Scan Cover</button>
    </div>
  );
}

export default CoverScanner;
