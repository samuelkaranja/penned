import { useContext } from "react";
import { Banner, Post } from "../../components";
import "./home.css";
import { GlobalContext } from "../../context/context";

const Home = () => {
  const { posts } = useContext(GlobalContext);

  return (
    <div className="home">
      <Banner />
      <div className="archive">
        <h2>Posts</h2>
        <div className="posts">
          {posts && posts.length > 0 ? (
            posts.map((blog) => <Post blog={blog} key={blog.id} />)
          ) : (
            <h2>No posts available!!</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
