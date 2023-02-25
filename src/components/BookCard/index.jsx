import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";
import IconBook from "../../assets/no_cover_thumb.jpg";
import { HiStar } from "react-icons/hi";

const BookCard = ({ book, showLink = true, ...props }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    let arr = [];
    let count = 1;

    while (count <= book.volumeInfo.averageRating) {
      arr.push(1);
      count++;
    }

    setStars(arr);
  }, []);

  return (
    <div className={styles.cards} {...props}>
      <img
        src={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : IconBook
        }
        alt={book.volumeInfo.title}
      />
      <div className={styles.bookInfo}>
        <h4>{book.volumeInfo.title}</h4>

        {book.volumeInfo.averageRating && (
          <p className={styles.starIcon}>
            <strong>Classificação: </strong>
            {stars.map((item) => (
              <HiStar size={20} key={book.etag + Math.random() * 10} />
            ))}
          </p>
        )}

        <div className="authors">
          <strong>Autores: </strong>

          {book.volumeInfo.authors &&
            book.volumeInfo.authors.map((author) => (
              <span key={book.etag + Math.random() * 10}>{author}; </span>
            ))}
        </div>
        {book.volumeInfo.publisher && (
          <span>
            <strong>Editor: </strong>
            {book.volumeInfo.publisher}
          </span>
        )}

        {book.volumeInfo.publishedDate && (
          <p>
            <strong>Ano de Publicação: </strong>
            {book.volumeInfo.publishedDate.slice(0, 4)}
          </p>
        )}

        {book.volumeInfo.pageCount && (
          <p>
            <strong>Total de páginas: </strong>
            {book.volumeInfo.pageCount}
          </p>
        )}

        {showLink && (
          <Link to={`/book/${book.id}`}>
            <button>Detalhes</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default BookCard;
