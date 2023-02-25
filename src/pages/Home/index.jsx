import Bookshelf from "../../assets/bookshelf.svg";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className="container main">
      <div className={styles.content}>
        <div className={styles.text}>
          <h1>Viva Livros</h1>
          <p>
            Pesquise por qualquer livro, em qualquer lugar! Você encontrará
            diversas informações sobre o livro que deseja buscar e um breve
            resumo para estimular sua leitura.
          </p>

          <p>
            Todos os livros e suas informações, são extraídos da api do google
            livros.
          </p>
        </div>
        <div className={styles.ilustration}>
          <img
            src={Bookshelf}
            alt="ilustração de um homem pegando livros em uma estante"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
