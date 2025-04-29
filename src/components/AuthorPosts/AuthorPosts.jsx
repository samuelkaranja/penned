import React, { useContext, useState } from "react";
import "./authorposts.css";
import { GlobalContext } from "../../context/context";
import { Link } from "react-router-dom";

const AuthorPosts = () => {
  const { posts, user, handleDelete } = useContext(GlobalContext);

  const [showConfirm, setShowConfirm] = useState(false);
  const [postToDelete, setPostToDelete] = useState(null);

  const userPosts = posts?.filter((post) => post?.author === user?.fullname);

  const confirmDelete = (postId) => {
    setPostToDelete(postId);
    setShowConfirm(true);
  };

  const cancelDelete = () => {
    setShowConfirm(false);
    setPostToDelete(null);
  };

  const proceedDelete = () => {
    if (postToDelete !== null) {
      handleDelete(postToDelete);
      setShowConfirm(false);
      setPostToDelete(null);
    }
  };

  return (
    <>
      {userPosts.length === 0 ? (
        <p className="no-posts">You haven’t created any posts yet.</p>
      ) : (
        userPosts.map((post) => (
          <div className="authorposts" key={post?.id}>
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

            <div className="btns">
              <button className="edit">Edit</button>
              <button
                className="delete"
                onClick={() => confirmDelete(post?.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <p className="modal-text">
              Are you sure you want to delete this post?
            </p>
            <div className="modal-actions">
              <button onClick={proceedDelete} className="confirm-btn">
                Yes, delete
              </button>
              <button onClick={cancelDelete} className="cancel-btn">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuthorPosts;
