import { useState } from "react";
import products from "../data/products";

function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Coffee", "Cold Drinks", "Desserts"];

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === activeCategory
        );

  return (
    <section className="menu section" id="menu">
      <div className="section-heading">
        <p className="subtitle">MADE FRESH FOR YOU</p>
        <h2>Our <span>Menu</span></h2>
        <p>Find your new favorite drink.</p>
      </div>

      <div className="category-buttons">
        {categories.map((category) => (
          <button
            key={category}
            className={
              activeCategory === category ? "active" : ""
            }
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />

            <div className="product-info">
              <div className="product-heading">
                <h3>{product.name}</h3>
                <strong>€{product.price.toFixed(2)}</strong>
              </div>

              <p>{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;