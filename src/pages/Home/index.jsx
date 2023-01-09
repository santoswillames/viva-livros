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
  };

  useEffect(() => {
    const booksLinksUrl = `${bookUrl}?q=javascript&langRestrict=br&projection=full&key=${keyApi}`;

    getBooks(booksLinksUrl);
  }, []);

  return (
    <div className="container">
      <h1 style={{ marginBottom: "8px" }}>
        Livros que nós recomendamos para você!
      </h1>
      <div className="content">
        {books.length === 0 && <p>Carregando...</p>}
        {books.length > 0 &&
          books.map((book) => <BookCard key={book.etag} book={book} />)}
      </div>
    </div>
  );
};

export default Home;
