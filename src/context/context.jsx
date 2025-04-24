import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
//import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  //const navigate = useNavigate();

  // Authentication states
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem("access_token") || ""
  );
  const [refreshToken, setRefreshToken] = useState(
    localStorage.getItem("refresh_token") || ""
  );
  const [user, setUser] = useState(null);

  // Fetch posts

  const fetchPosts = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/blogs/");
      const data = await res.json();
      setPosts(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []); // calls the fetchPosts function everytime the page re-renders

  // Filter posts

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Delete post

  const handleDelete = async (blogId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/blogs/${blogId}/`,
        {
          method: "DELETE",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete blog");
      }

      console.log("Blog deleted");
      setPosts(posts.filter((blog) => blog.id !== blogId)); // Update state
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // DarkMode

  const handleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  // Handle Login (store tokens and user info)
  const handleLogin = (data) => {
    setAccessToken(data.access);
    setRefreshToken(data.refresh);
    setUser(data.user); // Assuming your API returns user data
    localStorage.setItem("access_token", data.access);
    localStorage.setItem("refresh_token", data.refresh);
  };

  // Handle Logout (clear user info and tokens)
  const handleLogout = () => {
    setAccessToken("");
    setRefreshToken("");
    setUser(null);
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    window.location.href = "/login"; // Redirect to login page
    toast.success("Logged out successfully!!");
  };

  return (
    <GlobalContext.Provider
      value={{
        posts,
        isLoading,
        setSearchText,
        filteredPosts,
        setPosts,
        handleDelete,
        darkMode,
        handleDarkMode,
        handleLogin,
        handleLogout,
        user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
