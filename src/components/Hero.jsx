function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="subtitle">YOUR DAILY DOSE OF HAPPINESS</p>

        <h1>
          Life begins
          <br />
          after <span>coffee.</span>
        </h1>

        <p className="hero-description">
          Good coffee, good moments and a little bit
          of happiness in every cup.
        </p>

        <div className="hero-buttons">
          <a href="#menu" className="primary-button">
            Explore our menu →
          </a>

        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000"
          alt="Freshly brewed coffee"
        />
        
        </div>
    </section>
  );
}

export default Hero;