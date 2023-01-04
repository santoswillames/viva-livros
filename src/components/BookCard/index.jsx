import { Link } from "react-router-dom";
import { BsFillInfoCircleFill, BsYoutube } from "react-icons/bs";
import IconBook from "../../assets/no_cover_thumb.jpg";
import "./BookCard.css";

const BookCard = ({ book, showLink = true }) => {
  return (
    <div className="book-card">
      <img
        src={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : IconBook
        }
        alt={book.volumeInfo.title}
      />
      <div className="book-info">
        <h3>{book.volumeInfo.title}</h3>
        <p>Classificação: {book.volumeInfo.averageRating}</p>
        <div>
          <strong>Autores:</strong>
          <ul>
            {book.volumeInfo.authors &&
              book.volumeInfo.authors.map((author) => (
                <li key={book.etag + Math.random() * 10}>{author}</li>
              ))}
          </ul>
        </div>
        <p>Editor: {book.volumeInfo.publisher} </p>
        <p>
          Ano de Publicação:{" "}
          {book.volumeInfo.publishedDate &&
            book.volumeInfo.publishedDate.slice(0, 4)}
        </p>
        <p>
          <span>Total de páginas: </span>
          {book.volumeInfo.pageCount}
        </p>
        {showLink && (
          <button>
            <Link to={`/book/${book.id}`}>
              Detalhes <BsFillInfoCircleFill />
            </Link>
          </button>
        )}
        <button>
          Ouça <BsYoutube />
        </button>
      </div>
    </div>
  );
};

export default BookCard;
