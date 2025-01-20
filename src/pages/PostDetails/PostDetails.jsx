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
      <h2>{blogdetails?.title}</h2>
      <h3>{blogdetails?.subtitle}</h3>
    </div>
  );
};

export default PostDetails;
