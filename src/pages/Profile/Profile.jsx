import React from "react";
import "./profile.css";
import { ProfileInfo, Tabs } from "../../components";

const Profile = () => {
  return (
    <div className="profile">
      <ProfileInfo />
      <Tabs />
    </div>
  );
};

export default Profile;
