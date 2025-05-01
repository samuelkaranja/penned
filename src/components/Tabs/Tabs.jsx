import React, { useState } from "react";
import "./tabs.css";
import AuthorPosts from "../AuthorPosts/AuthorPosts";
import AuthorDetails from "../AuthorDetails/AuthorDetails";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("AuthorDetails");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs">
      <div className="tabs_btns">
        <button onClick={() => handleTabClick("AuthorDetails")}>Details</button>
        <button onClick={() => handleTabClick("AuthorPosts")}>Posts</button>
      </div>
      <div>
        {activeTab === "AuthorDetails" && <AuthorDetails />}
        {activeTab === "AuthorPosts" && <AuthorPosts />}
      </div>
    </div>
  );
};

export default Tabs;
