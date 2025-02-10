import "./comments.css";

const Comments = () => {
  return (
    <div className="comments">
      <span>Comments</span>
      <div className="response">
        <form>
          <textarea
            name="comment"
            rows="15"
            cols="30"
            placeholder="Provide Feedback..."
          ></textarea>
          <button type="submit">Comment</button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
