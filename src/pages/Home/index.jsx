import { useState, useEffect } from "react";
import BookCard from "../../components/BookCard";

const bookUrl = import.meta.env.VITE_API;
const keyApi = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async (url) => {
    const res = await fetch(url);
    const response = await res.json();

    setBooks(response.items);

    console.log(response);
  };

  useEffect(() => {
    const booksLinksUrl = `${bookUrl}?q=poter&maxResults=10&key=${keyApi}`;

    getBooks(booksLinksUrl);
  }, []);

  return (
    <div>
      <h1>Livros</h1>
      <div>
        {books.length === 0 && <p>Carregando...</p>}
        {books.length > 0 &&
          books.map((book) => <BookCard key={book.id} book={book} />)}
      </div>
    </div>
  );
};

export default Home;
