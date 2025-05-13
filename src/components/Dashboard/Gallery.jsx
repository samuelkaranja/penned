import "./style.css";

const Gallery = () => {
  return (
    <section className="gallery card">
      <h3>My Gallery</h3>
      <div className="gallery-grid">
        {[...Array(8)].map((_, i) => (
          <img key={i} src={`/gallery${i + 1}.jpg`} alt="Gallery item" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
