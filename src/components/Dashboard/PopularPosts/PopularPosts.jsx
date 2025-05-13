import "./popularposts.css";
import Image from "../../../assets/bermuda.jpg";

const PopularPosts = () => {
  return (
    <div className="popular">
      <span className="head">Popular Posts</span>
      <div className="post-card">
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <div className="post-details">
          <span className="title">Road Trip Essentials</span>
          <span className="subtitle">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit qui dolorem ipsum quia dolo...
          </span>
          <span className="views">1003 views</span>
          <span className="comments">523 comments</span>
        </div>
      </div>

      <div className="post-card">
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <div className="post-details">
          <span className="title">Road Trip Essentials</span>
          <span className="subtitle">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit qui dolorem ipsum quia dolo...
          </span>
          <span className="views">1003 views</span>
          <span className="comments">523 comments</span>
        </div>
      </div>

      <div className="post-card">
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <div className="post-details">
          <span className="title">Road Trip Essentials</span>
          <span className="subtitle">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit qui dolorem ipsum quia dolo...
          </span>
          <span className="views">1003 views</span>
          <span className="comments">523 comments</span>
        </div>
      </div>

      <div className="post-card">
        <div className="image">
          <img src={Image} alt="" />
        </div>
        <div className="post-details">
          <span className="title">Road Trip Essentials</span>
          <span className="subtitle">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit qui dolorem ipsum quia dolo...
          </span>
          <span className="views">1003 views</span>
          <span className="comments">523 comments</span>
        </div>
      </div>
    </div>
  );
};

export default PopularPosts;
