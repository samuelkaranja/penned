import { useContext } from "react";
import { Banner, Post, Search } from "../../components";
import "./home.css";
import { GlobalContext } from "../../context/context";

const Home = () => {
  const { filteredPosts } = useContext(GlobalContext);

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
