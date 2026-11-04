function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        BREW<span>&</span>BEAN.
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#menu">Our Menu</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#contact" className="cart-button">
        Get in Touch →
      </a>
    </nav>
  );
}

export default Navbar;