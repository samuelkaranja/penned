import React, { useContext } from "react";
import "./profileinfo.css";
import Image from "../../assets/code.jpg";
import { GlobalContext } from "../../context/context";

const ProfileInfo = () => {
  const { user } = useContext(GlobalContext);
  console.log("User Image Path:", user?.image);

  return (
    <div className="profileinfo">
      <div className="author">
        <div className="author_image">
          <img
            src={user?.image ? `http://localhost:8000${user.image}` : Image}
            alt=""
          />
        </div>
        <div className="author_info">
          <span>{user?.fullname}</span>
          <span>Username: {user?.username}</span>
          <span>Email: {user?.email}</span>
          <p>{user?.about}</p>
        </div>
      </div>
      <div className="author_btns">
        <a href="/#">Follow</a>
        <a href="/#">Message</a>
      </div>
    </div>
  );
};

export default ProfileInfo;
