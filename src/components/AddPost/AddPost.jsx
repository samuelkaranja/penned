import { useState } from "react";
import "./addpost.css";

const AddPost = () => {
  const [postData, setPostData] = useState({
    title: "",
    subtitle: "",
    image: "",
    description: "",
    author: "",
  });

  //Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setPostData({ ...postData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(postData);

    setPostData({
      title: "",
      subtitle: "",
      image: "",
      description: "",
      author: "",
    });
  };

  return (
    <div className="addpost">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={postData.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>SubTitle:</label>
          <input
            type="text"
            name="subtitle"
            value={postData.subtitle}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            value={postData.image}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            cols="30"
            rows="10"
            name="description"
            value={postData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Author:</label>
          <input
            type="text"
            name="author"
            value={postData.author}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="post_btn">
          Add Post
        </button>
      </form>
    </div>
  );
};

export default AddPost;
