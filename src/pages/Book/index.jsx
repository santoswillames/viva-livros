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
    const booksLinksUrl = `${bookUrl}/${id}?key=${keyApi}`;

    getBook(booksLinksUrl);
  }, []);

  return (
    <div>
      {book && (
        <>
          <BookCard book={book} showLink={false} />
          <div>
            <strong>
              {book.volumeInfo.authors.length > 1 ? "Autores:" : "Autor:"}
            </strong>
            <ul>
              {book.volumeInfo.authors.map((author) => (
                <li>{author}</li>
              ))}
            </ul>
          </div>
          <p>
            <span>Total de páginas: </span>
            {book.volumeInfo.pageCount}
          </p>
          {book.volumeInfo.description}
        </>
      )}
    </div>
  );
};

export default Books;
