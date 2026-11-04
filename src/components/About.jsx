function About() {
  return (
    <section className="about section" id="about">
      <div className="about-image">
        <img
          src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=900"
          alt="Cozy coffee shop interior"
        />
      </div>

      <div className="about-content">
        <p className="subtitle">A LITTLE ABOUT US</p>

        <h2>
          More than just
          <br />
          a cup of <span>coffee.</span>
        </h2>

        <p>
          At Brew & Bean, we believe that coffee is more
          than a drink. It is a moment to slow down,
          connect and enjoy the little things in life.
        </p>

        <p>
          From carefully selected coffee beans to
          freshly prepared treats, every detail matters.
        </p>

      </div>
    </section>
  );
}

export default About;