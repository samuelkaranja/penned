import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "./authordetails.css";
import { GlobalContext } from "../../context/context";

const AuthorDetails = () => {
  const { setUser } = useContext(GlobalContext);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    fullname: "",
    about: "",
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("access_token");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/profile/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFormData({
          fullname: res.data.fullname,
          username: res.data.username,
          email: res.data.email,
          image: null,
          about: res.data.about,
        });
        setPreviewImage(res.data.image);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prev) => ({ ...prev, image: file }));
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("username", formData.username);
    data.append("email", formData.email);
    data.append("fullname", formData.fullname);
    data.append("about", formData.about);
    if (formData.image) data.append("image", formData.image);

    axios
      .put("http://localhost:8000/api/profile/", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        toast.success("Profile updated successfully!");
        setUser(res.data); // Update global context
        localStorage.setItem("user", JSON.stringify(res.data)); // Update localStorage
      })
      .catch((err) => {
        console.error(err);
        toast.error("Failed to update profile.");
      });
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="authordetails">
      <h1>Profile Infomation</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name:</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={formData.fullname}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Profile Image:</label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleFileChange}
          />
          {previewImage && (
            <div>
              <p style={{ color: "#000", fontSize: "13px", margin: "5px 0" }}>
                Preview:
              </p>
              <img
                src={previewImage}
                alt="Preview"
                style={{
                  width: "120px",
                  height: "120px",
                  overflow: "hidden",
                  objectFit: "cover",
                  borderRadius: "10%",
                }}
              />
            </div>
          )}
        </div>
        <div>
          <label>About:</label>
          <textarea
            name="about"
            id="about"
            value={formData.about}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Profile</button>
      </form>
    </div>
  );
};

export default AuthorDetails;
