import Logo from "../Logo";
import { BsYoutube, BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <Logo />
      <p>developed by Willames</p>
      <div className="icons-footer">
        <BsYoutube />
        <BsGithub />
        <BsLinkedin />
      </div>
    </div>
  );
};

export default Footer;
