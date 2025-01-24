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

  //Delete post
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

  return (
    <GlobalContext.Provider
      value={{
        posts,
        isLoading,
        setSearchText,
        filteredPosts,
        setPosts,
        handleDelete,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
