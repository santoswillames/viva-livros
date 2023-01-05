import "./Footer.css";
import Logo from "../Logo";
import { BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container">
      <Logo />
      <p>Developed by Willames Santos</p>
      <div className="icons-footer">
        <a href="#" target="_blank">
          <BsYoutube />
        </a>
        <a href="https://github.com/santoswillames" target="_blank">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/willames-silva-dos-santos-a26172126/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
