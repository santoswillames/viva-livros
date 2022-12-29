import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import BookCard from "../../components/BookCard";

const bookUrl = import.meta.env.VITE_API;
const keyApi = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();

  const [books, setBooks] = useState([]);

  const query = searchParams.get("q");

  const getBooks = async (url) => {
    const res = await fetch(url);
    const response = await res.json();

    setBooks(response.items);
  };

  useEffect(() => {
    const booksLinksUrl = `${bookUrl}?q=${query}+intitle:${query}&key=${keyApi}`;

    getBooks(booksLinksUrl);
  }, [query]);

  return (
    <div>
      <h2>
        Resultados para: <span>{query}</span>
      </h2>
      <div>
        {books.length === 0 && <p>Carregando...</p>}
        {books.length > 0 &&
          books.map((book) => <BookCard key={book.etag} book={book} />)}
      </div>
    </div>
  );
};

export default Search;
