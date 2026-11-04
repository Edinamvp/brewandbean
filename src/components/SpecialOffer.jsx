function SpecialOffer() {
  return (
    <section className="special-offer">
      <div className="offer-content">
        <p className="subtitle">A LITTLE SOMETHING SPECIAL</p>

        <h2>
          Your favorite coffee,
          <br />
          now with a <span>sweet deal.</span>
        </h2>

        <p>
          Get a coffee and a freshly baked croissant
          together for only €4.50.
        </p>

        <a href="#menu" className="primary-button">
          Explore the offer →
        </a>
      </div>

      <img
        src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=900"
        alt="Coffee and pastries"
      />
    </section>
  );
}

export default SpecialOffer;