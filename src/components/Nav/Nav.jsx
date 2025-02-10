import { Link } from "react-router-dom";
import { FaMoon, FaPenFancy, FaSun } from "react-icons/fa";
import "./nav.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";

const Nav = () => {
  const { darkMode, handleDarkMode } = useContext(GlobalContext);

  return (
    <div className="nav">
      <div className="nav__logo">
        <FaPenFancy />
        <Link to="/" className="logo">
          penned
        </Link>
      </div>

      <div className="nav_links">
        {darkMode ? (
          <FaSun onClick={handleDarkMode} />
        ) : (
          <FaMoon onClick={handleDarkMode} />
        )}

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
