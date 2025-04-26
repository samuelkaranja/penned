import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Authentication states
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [user, setUser] = useState(null);

  // Rehydrate tokens and user from localStorage on app start
  useEffect(() => {
    const storedAccess = localStorage.getItem("access_token");
    const storedRefresh = localStorage.getItem("refresh_token");
    const storedUser = localStorage.getItem("user");

    if (storedAccess && storedRefresh && storedUser) {
      setAccessToken(storedAccess);
      setRefreshToken(storedRefresh);
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Fetch posts

  const fetchPosts = async () => {
    setIsLoading(true);

    const tryFetch = async () => {
      try {
        const res = await fetch("http://127.0.0.1:8000/api/blogs/");
        if (!res.ok) throw new Error("Server error");
        const data = await res.json();
        setPosts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error, "Server not ready. Retrying in 2s...");
        setTimeout(tryFetch, 3000); // Keep retrying every 2 seconds until backend is up
      }
    };
    tryFetch();
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
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  // Handle Logout (clear user info and tokens)
  const handleLogout = () => {
    setAccessToken("");
    setRefreshToken("");
    setUser(null);

    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");

    window.location.href = "/login"; // Redirect to login page
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
        accessToken,
        user,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
