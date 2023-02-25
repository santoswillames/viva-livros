import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./Book.module.css";

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
    <div className="container main">
      {!book && <p>Carregando...</p>}
      {book && (
        <div className={styles.content}>
          <BookCard book={book} showLink={false} />
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: book.volumeInfo.description }}
          />
        </div>
      )}
    </div>
  );
};

export default Books;
