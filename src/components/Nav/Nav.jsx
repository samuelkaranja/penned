import { Link } from "react-router-dom";
import { FaMoon, FaPenFancy, FaSun } from "react-icons/fa";
import "./nav.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import Image from "../../assets/code.jpg";

const Nav = () => {
  const { darkMode, handleDarkMode, handleLogout, user, accessToken } =
    useContext(GlobalContext);

  return (
    <div className="nav">
      <div className="nav__logo">
        <FaPenFancy className="pen" />
        <Link to="/" className="logo">
          penned
        </Link>
      </div>

      <div className="nav_links">
        {/* {darkMode ? (
          <FaSun onClick={handleDarkMode} />
        ) : (
          <FaMoon onClick={handleDarkMode} style={{ color: "#000" }} />
        )} */}

        {!accessToken ? (
          <>
            <Link to="/login" className="login">
              Login
            </Link>

            <Link to="/sign-up" className="signup">
              SignUp
            </Link>
          </>
        ) : (
          <div className="logged-in">
            <Link to="/create-post" className="create">
              Create Post
            </Link>

            <span className="welcome">
              Welcome, <Link to="/profile">{user.username}</Link>
            </span>

            <img
              src={user?.image ? `http://localhost:8000${user.image}` : Image}
              alt={user?.username}
              className="user-image"
            />

            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
