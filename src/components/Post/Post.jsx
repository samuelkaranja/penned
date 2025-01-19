import "./post.css";
import { CiHeart } from "react-icons/ci";
import image from "../../assets/react.png";

const Post = () => {
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
        <span className="title">
          React Will FINALLY Gets Its Own Animations
        </span>
        <p className="subtitle">And five years of React Native at Shopify</p>
        <small className="author">Author: Samuel</small>
      </div>
    </div>
  );
};

export default Post;
