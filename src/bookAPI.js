// bookAPI.js
export async function fetchBookData(query) {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyDHq9Ovv9y5HqPW_KsA0cE1lZvtltDLeGI`);
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const result = await response.json();
    console.log(result);  // Log the API response to inspect it
    return result.items ? result.items[0] : null;
  }
  