import { useContext } from "react";
import { Banner, Post, Search } from "../../components";
import "./home.css";
import { GlobalContext } from "../../context/context";

const Home = () => {
  const { isLoading, filteredPosts } = useContext(GlobalContext);

  if (isLoading) return <h2 className="loading">Fetching blogs....</h2>;

  return (
    <div className="home">
      <Banner />
      <div className="archive">
        <h2>Posts</h2>
        <Search />
        <div className="posts">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((blog) => <Post blog={blog} key={blog.id} />)
          ) : (
            <h2>No posts available!!</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
