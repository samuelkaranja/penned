import "./style.css";

const comments = [
  {
    user: "Jennifer Moray",
    text: "Wonderful! I’m impressed.",
    status: "Accepted",
  },
  {
    user: "Andrew Nolasco",
    text: "I had the opportunity...",
    status: "Approved",
  },
];
const Comments = () => {
  return (
    <section className="comments card">
      <h3>Comments</h3>
      {comments.map((c, i) => (
        <div key={i} className="comment">
          <strong>{c.user}</strong>
          <p>{c.text}</p>
          <small>{c.status}</small>
        </div>
      ))}
    </section>
  );
};

export default Comments;
