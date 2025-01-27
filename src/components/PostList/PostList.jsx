import { useContext } from "react";
import "./postlist.css";
import { GlobalContext } from "../../context/context";
import Post from "../Post/Post";

const PostList = () => {
  const { isLoading, filteredPosts } = useContext(GlobalContext);

  if (isLoading) return <h3 className="loading">Fetching blogs....</h3>;

  return (
    <div className="postlist">
      <div className="posts">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((blog) => <Post blog={blog} key={blog.id} />)
        ) : (
          <h2>No posts available!!</h2>
        )}
      </div>
    </div>
  );
};

export default PostList;
