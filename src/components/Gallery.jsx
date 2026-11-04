function Gallery() {
  const images = [
    "photo-1442512595331-e89e73853f31",
    "photo-1495474472287-4d71bcdd2085",
    "photo-1501339847302-ac426a4a7cbb",
    "photo-1445116572660-236099ec97a0"
  ];

  return (
    <section className="gallery section" id="gallery">
      <div className="section-heading">
        <p className="subtitle">OUR LITTLE WORLD</p>
        <h2>Moments at <span>Brew & Bean</span></h2>
      </div>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={`https://images.unsplash.com/${image}?w=700`}
            alt={`Coffee shop gallery ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;