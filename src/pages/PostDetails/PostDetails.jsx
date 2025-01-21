import { useParams } from "react-router-dom";
import "./postdetails.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";

const PostDetails = () => {
  const { title } = useParams();
  const { posts } = useContext(GlobalContext);

  // Replace dashes with spaces to match the original title
  const decodedTitle = title.replace(/-/g, " ");

  const blogdetails = posts.find((blog) => blog.title === decodedTitle);

  return (
    <div className="postdetails">
      <div className="more">
        <div className="header">
          <span className="title">{blogdetails?.title}</span>
          <span className="subtitle">{blogdetails?.subtitle}</span>
        </div>
        <div className="author">
          <small>Author: {blogdetails?.author}</small>
          <small>Published: {blogdetails?.date_published}</small>
        </div>
        <div className="image">
          <img src={blogdetails?.image} alt="" />
        </div>
        <div className="details">
          <p>{blogdetails?.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
