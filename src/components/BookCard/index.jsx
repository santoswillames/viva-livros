import { Link } from "react-router-dom";
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
        <h2>{book.volumeInfo.title}</h2>
        <p>Classificação: {book.volumeInfo.averageRating}</p>

        {showLink && (
          <button>
            <Link to={`/book/${book.id}`}>Detalhes</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
