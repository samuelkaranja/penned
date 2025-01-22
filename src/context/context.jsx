import { createContext, useState } from "react";
import { posts } from "../assets/Data";

console.log(posts);

export const GlobalContext = createContext();

const GlobalState = ({ children }) => {
  const [searchText, setSearchText] = useState("");

  // Filter posts
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <GlobalContext.Provider
      value={{ posts, searchText, setSearchText, filteredPosts }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
