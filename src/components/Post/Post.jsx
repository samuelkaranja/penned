import "./post.css";
import { CiHeart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Post = ({ blog }) => {
  const slug = blog?.title.replace(/\s+/g, "-"); // Replace spaces with dashes

  return (
    <div className="post">
      <img src={blog?.image} alt="" />
      <div className="body">
        <div className="dl">
          <small style={{ fontSize: "11px" }}>
            Created On:{" "}
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
        <p className="subtitle">
          {blog?.subtitle.length > 50
            ? blog?.subtitle.slice(0, 80) + "..."
            : blog?.subtitle}
        </p>
        <small className="author">author: {blog?.author.split(" ")[0]}</small>
      </div>
    </div>
  );
};

export default Post;
