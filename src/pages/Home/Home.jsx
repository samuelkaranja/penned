import { Banner, Post } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="archive">
        <h2>Archive</h2>
        <div className="posts">
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </div>
    </div>
  );
};

export default Home;
