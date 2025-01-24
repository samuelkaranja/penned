import { createContext, useState, useEffect } from "react";

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  }, []);

  // Filter posts
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <GlobalContext.Provider
      value={{ posts, isLoading, setSearchText, filteredPosts, setPosts }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
