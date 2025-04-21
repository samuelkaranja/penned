import { Banner, PostList, Search } from "../../components";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="archive">
        <h2>Blog Posts</h2>
        <Search />
        <PostList />
      </div>
    </div>
  );
};

export default Home;
