import React, { useContext } from "react";
import "./authorposts.css";
import { GlobalContext } from "../../context/context";
import { Link } from "react-router-dom";

const AuthorPosts = () => {
  const { posts, user } = useContext(GlobalContext);

  const userPosts = posts?.filter((post) => post?.author === user?.fullname);

  return (
    <>
      {userPosts.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            fontSize: "18px",
            fontWeight: "600",
            color: "#000",
            padding: "20px",
          }}
        >
          You haven’t created any posts yet.
        </p>
      ) : (
        userPosts.map((post) => (
          <div className="authorposts" key={post.id}>
            <div className="posts_display">
              <div className="posts_img">
                <img src={post?.image} alt="" />
              </div>
              <div className="posts_info">
                <Link
                  to={`/details/${post?.title.replace(/\s+/g, "-")}`}
                  className="title"
                >
                  {post?.title}
                </Link>
                <span className="writer">Author: {post?.author}</span>

                <span className="time">
                  Created:{" "}
                  {new Date(post?.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  );
};

export default AuthorPosts;
