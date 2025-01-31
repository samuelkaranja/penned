import { Link } from "react-router-dom";
import { FaPenFancy } from "react-icons/fa";
import "./nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <FaPenFancy />
        <Link to="/" className="logo">
          penned
        </Link>
      </div>
      <div className="nav_links">
        <Link to="/create-post" className="create">
          Create Post
        </Link>

        <Link to="/login" className="login">
          Login
        </Link>

        <Link to="/sign-up" className="signup">
          SignUp
        </Link>
      </div>
    </div>
  );
};

export default Nav;
