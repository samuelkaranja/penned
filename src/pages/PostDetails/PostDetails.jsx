import { useParams } from "react-router-dom";
import "./postdetails.css";
import { useContext } from "react";
import { GlobalContext } from "../../context/context";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Comments } from "../../components";

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
          <div className="name">
            <small>Author: {blogdetails?.author.split(" ")[0]}</small>
            <small>
              Published:{" "}
              {new Date(blogdetails?.created_at).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </small>
          </div>
          <div className="social">
            <ul>
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaSquareXTwitter />
              </li>
              <li>
                <FaInstagramSquare />
              </li>
              <li>
                <FaLinkedin />
              </li>
            </ul>
          </div>
        </div>
        <div className="image">
          <img src={blogdetails?.image} alt="" />
        </div>
        <div className="details">
          <p>{blogdetails?.description}</p>
        </div>
      </div>
      <div className="feedback">
        <Comments />
      </div>
    </div>
  );
};

export default PostDetails;
