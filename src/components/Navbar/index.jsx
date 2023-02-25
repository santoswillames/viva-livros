import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RxMagnifyingGlass } from "react-icons/rx";

import styles from "./Navbar.module.css";

import Logo from "../Logo";

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
    <div className="container header">
      <div className={styles.nav}>
        <Logo />
        <form onSubmit={handleSubmit} className={styles.formSearch}>
          <input
            type="text"
            placeholder="Busque um livro"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <RxMagnifyingGlass size={24} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Navbar;
