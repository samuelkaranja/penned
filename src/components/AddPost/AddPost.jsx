import { useContext, useState } from "react";
import "./addpost.css";
import { GlobalContext } from "../../context/context";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddPost = () => {
  const { setPosts, user } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    subtitle: "",
    image: "",
    description: "",
    author: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };

  const handlePostSubmit = async (event) => {
    // event.preventDefault();
    const updatedFormData = { ...formData, author: user?.fullname };

    const data = new FormData();
    Object.entries(updatedFormData).forEach(([key, value]) => {
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
      toast.success("Blog created successfully");

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

      navigate("/");
    } catch (error) {
      toast.error("Failed to create blog", error);
    }
  };

  return (
    <div className="addpost">
      <div className="frm">
        <form onSubmit={handleSubmit(handlePostSubmit)}>
          <div>
            <label>Title:</label>
            <input
              {...register("title", { required: true })}
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
            {errors.title && errors.title.type === "required" ? (
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Titile required
              </p>
            ) : null}
          </div>
          <div>
            <label>SubTitle:</label>
            <input
              {...register("subtitle", { required: true })}
              type="text"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
            />
            {errors.subtitle && errors.subtitle.type === "required" ? (
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Subtitle required
              </p>
            ) : null}
          </div>
          <div>
            <label>Image:</label>
            <input
              {...register("image", { required: true })}
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
            />
            {errors.image && errors.image.type === "required" ? (
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Image required
              </p>
            ) : null}
          </div>
          <div>
            <label>Description:</label>
            <textarea
              {...register("description", { required: true })}
              cols="30"
              rows="10"
              name="description"
              value={formData.description}
              onChange={handleChange}
            ></textarea>
            {errors.description && errors.description.type === "required" ? (
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Description required
              </p>
            ) : null}
          </div>
          {/* <div>
            <label>Author:</label>
            <input
              {...register("author", { required: true })}
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />
            {errors.author && errors.author.type === "required" ? (
              <p
                style={{
                  color: "red",
                  fontSize: "13px",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                Author required
              </p>
            ) : null}
          </div> */}

          <button type="submit" className="post_btn">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
