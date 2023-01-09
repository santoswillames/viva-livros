import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Book.css";
import BookCard from "../../components/BookCard";

const bookUrl = import.meta.env.VITE_API;
const keyApi = import.meta.env.VITE_API_KEY;

const Books = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  const getBook = async (url) => {
    const res = await fetch(url);
    const response = await res.json();

    setBook(response);
  };

  useEffect(() => {
    const booksLinksUrl = `${bookUrl}/${id}?key=${keyApi}&projection=full`;

    getBook(booksLinksUrl);
  }, []);

  return (
    <div className="container">
      {!book && <p>Carregando...</p>}
      {book && (
        <div className="content description">
          <BookCard book={book} showLink={false} />
          <p>{book.volumeInfo.description}</p>
        </div>
      )}
    </div>
  );
};

export default Books;
