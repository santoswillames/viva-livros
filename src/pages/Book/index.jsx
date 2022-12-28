import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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

    console.log(response);
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
          {book.volumeInfo.description}
        </>
      )}
    </div>
  );
};

export default Books;
