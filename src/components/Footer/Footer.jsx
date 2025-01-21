import { Link } from "react-router-dom";
import "./footer.css";
import Subscribe from "../Subscribe/Subscribe";

const Footer = () => {
  return (
    <div className="footer">
      <div className="about">
        <Link to="/">penned</Link>
        <span>
          Hub for insights, tutorials, and the latest innovations in the tech
          universe.
        </span>
        <span>&copy;2025 penned</span>
      </div>
      <div className="links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>Blog</li>
        </ul>
      </div>
      <div className="terms">
        <Subscribe />
      </div>
    </div>
  );
};

export default Footer;
