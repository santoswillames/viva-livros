import { Link } from "react-router-dom";
import IconBook from "../../assets/no_cover_thumb.jpg";

const BookCard = ({ book, showLink = true }) => {
  return (
    <div className="movie-card">
      <img
        src={
          book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.thumbnail
            : IconBook
        }
        alt={book.volumeInfo.title}
      />
      <h2>{book.volumeInfo.title}</h2>

      {showLink && <Link to={`/book/${book.id}`}>Detalhes</Link>}
    </div>
  );
};

export default BookCard;
