import { Link } from "react-router-dom";
import { FaPenFancy } from "react-icons/fa";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <FaPenFancy />
      <Link to="/">penned</Link>
    </div>
  );
};

export default Nav;
