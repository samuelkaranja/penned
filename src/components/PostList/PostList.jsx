import { useContext, useState } from "react";
import "./postlist.css";
import { GlobalContext } from "../../context/context";
import Post from "../Post/Post";

const POSTS_PER_PAGE = 6;

const PostList = () => {
  const { isLoading, filteredPosts } = useContext(GlobalContext);

  const [currentPage, setCurrentPage] = useState(1);

  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (isLoading) return <h3 className="loading">Fetching blogs....</h3>;

  return (
    <div className="postlist">
      <div className="posts">
        {currentPosts.length > 0 ? (
          currentPosts.map((blog) => <Post blog={blog} key={blog.id} />)
        ) : (
          <h2>No posts available!!</h2>
        )}
      </div>
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => {
            const page = index + 1;
            return (
              <button
                key={page}
                className={page === currentPage ? "active" : ""}
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList;
