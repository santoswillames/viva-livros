import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img
          src="/public/book-svgrepo-com-colors.svg"
          alt="icone de um livro"
        />
        <div className="logo-text">
          <p>Viva</p>
          <p>Livros</p>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
