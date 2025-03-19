import { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [books, setBooks] = useState([]);

  // Fetch books from API on component mount
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:5000/api/books');
          setBooks(res.data);
    };

    fetchBooks();
  }, []);

  return (
      <div>

        {books.map(book => (
            <div key={book.id}>
              <h2>{book.title}</h2>
              <p>By {book.author}</p>
            </div>
        ))}
      </div>
  );
};

export default App;