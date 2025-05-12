import { useContext, useState } from "react";
import "./addpost.css";
import "./custom-mdeditor.css";
import { GlobalContext } from "../../context/context";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";

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
    control,
    formState: { errors },
  } = useForm();

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // New function for MDEditor!
  const handleDescriptionChange = (value) => {
    setFormData({ ...formData, description: value });
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
            {/* <label>Description:</label> */}
            {/* <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{ required: "Description required" }}
              render={({ field }) => (
                <div style={{ width: "500px", margin: "0 auto" }}>
                  <MDEditor
                    value={field.value}
                    onChange={field.onChange}
                    height={300}
                    visibleDragbar={false}
                    preview="edit"
                    data-color-mode="light"
                    style={{ width: "100%", color: "black" }}
                  />
                </div>
              )}
            />

            {errors.description && (
              <p
                className="error-message"
                style={{
                  color: "red",
                  fontSize: "13px",
                  margin: 0,
                  textAlign: "left",
                }}
              >
                {errors.description.message}
              </p>
            )} */}

            <label>Description:</label>

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
          <button type="submit" className="post_btn">
            Add Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
