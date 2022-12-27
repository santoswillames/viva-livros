import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiSpellBook, GiArchiveResearch } from "react-icons/gi";

import "./Navbar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`);
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <GiSpellBook /> Tudo Sobre Livros
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um livro"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <GiArchiveResearch />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;