import "./post.css";
import { CiHeart } from "react-icons/ci";
import image from "../../assets/react.png";
import { Link } from "react-router-dom";

const Post = ({ blog }) => {
  const slug = blog?.title.replace(/\s+/g, "-"); // Replace spaces with dashes

  return (
    <div className="post">
      <img src={image} alt="" />
      <div className="body">
        <div className="dl">
          <small>Jan 16, 2025</small>
          <small>
            <CiHeart />
          </small>
        </div>
        <Link to={`/details/${slug}`} className="title">
          {blog?.title}
        </Link>
        <p className="subtitle">{blog?.subtitle}</p>
        <small className="author">Author: {blog?.author}</small>
      </div>
    </div>
  );
};

export default Post;
