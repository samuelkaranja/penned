import { useContext, useState } from "react";
import "./addpost.css";
import { GlobalContext } from "../../context/context";

const AddPost = () => {
  const { setPosts } = useContext(GlobalContext);
  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    image: "",
    description: "",
    author: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  //Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      data.append(key, value);
    });

    try {
      const response = await fetch("http://127.0.0.1:8000/api/blogs/", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Failed to create blog");
      }

      const newBlog = await response.json();
      console.log("Blog created:", newBlog);
      setSuccessMessage("Blog created successfully");

      // Update the context with the new blog
      setPosts((prevPosts) => [...prevPosts, newBlog]);

      // Reset form data after submission
      setFormData({
        title: "",
        subtitle: "",
        image: "",
        description: "",
        author: "",
      });

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="addpost">
      {successMessage && <p className="success">{successMessage}</p>}
      <div className="frm">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>SubTitle:</label>
            <input
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Image:</label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <label>Description:</label>
            <textarea
              cols="30"
              rows="10"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="post_btn">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
