import { useContext } from "react";
import "./post.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/context";

const Post = ({ blog }) => {
  const slug = blog?.title.replace(/\s+/g, "-"); // Replace spaces with dashes
  const { handleDelete } = useContext(GlobalContext);

  return (
    <div className="post">
      <img src={blog?.image} alt="" />
      <div className="body">
        <div className="dl">
          <small>
            {new Date(blog?.created_at).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </small>
          <small>
            <CiHeart />
          </small>
        </div>
        <Link to={`/details/${slug}`} className="title">
          {blog?.title}
        </Link>
        <p className="subtitle">{blog?.subtitle}</p>
        <small className="author">author: {blog?.author}</small>
      </div>
      {/* <button
        onClick={() => handleDelete(blog.id)}
        style={{
          background: "red",
          color: "white",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Delete
      </button> */}
    </div>
  );
};

export default Post;
