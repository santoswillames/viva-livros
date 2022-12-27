import { useState, useEffect } from "react";

const bookUrl = import.meta.env.VITE_API;
const keyApi = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [books, setBooks] = useState([]);

  const getBooks = async (url) => {
    const res = await fetch(url);
    const response = await res.json();

    setBooks(response.items);

    console.log(response);
  };

  useEffect(() => {
    const booksLinksUrl = `${bookUrl}?q=pai&key=${keyApi}`;

    getBooks(booksLinksUrl);
  }, []);

  return (
    <div>
      <h1>Livros</h1>
      {books.length > 0 &&
        books.map((item) => <p key={item.id}>{item.volumeInfo.title}</p>)}
    </div>
  );
};

export default Home;
