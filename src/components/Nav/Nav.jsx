import { Link } from "react-router-dom";
import { FaMoon, FaPenFancy, FaSun } from "react-icons/fa";
import "./nav.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";

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
            <span
              style={{ color: "#000", fontSize: "14px", paddingRight: "10px" }}
            >
              Welcome, <Link to="/profile">{user.username}</Link>
            </span>

            <Link to="/create-post" className="create">
              Create Post
            </Link>

            <button onClick={handleLogout} className="logout">
              Logout
            </button>
          </div>
        )}

        {/* <Link to="/create-post" className="create">
          Create Post
        </Link>

        <Link to="/login" className="login">
          Login
        </Link>

        <Link to="/sign-up" className="signup">
          SignUp
        </Link> */}
      </div>
    </div>
  );
};

export default Nav;
