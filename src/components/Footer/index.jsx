import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <p>Developed by Willames Santos</p>
        <div className={styles.iconsFooter}>
          <a href="https://github.com/santoswillames" target="_blank">
            <RxGithubLogo size={28} />
          </a>
          <a
            href="https://www.linkedin.com/in/willames-silva-dos-santos-a26172126/"
            target="_blank"
          >
            <RxLinkedinLogo size={28} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
