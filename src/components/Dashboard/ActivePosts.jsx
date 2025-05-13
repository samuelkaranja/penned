import "./style.css";

const posts = [
  {
    title: "The latest photo session of my friend’s collection...",
    likes: 6348,
    views: 4243,
    date: "13th Oct 2017",
    image: "/img2.jpg",
  },
];

const ActivePosts = () => {
  return (
    <section className="active-posts card">
      <h3>Active Posts</h3>
      {posts.map((post, i) => (
        <div key={i} className="post-item">
          <img src={post.image} alt="Post" />
          <div className="post-info">
            <p>{post.title}</p>
            <small>{post.date}</small>
          </div>
          <div className="metrics">
            ❤️ {post.likes} 👁 {post.views}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ActivePosts;
