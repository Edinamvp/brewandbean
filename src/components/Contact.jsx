import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      return;
    }

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact-info">

        <h2>
          We'd love to
          <br />
          hear from <span>you.</span>
        </h2>

        <p>
          Send us a message!
        </p>

        <div className="contact-details">
         <p>📍 125 Madison Avenue, New York, NY 10016</p>
         <p>✉️ hello@brewandbean.com</p>
         <p>📞 +1 (212) 555-0147</p>
         <p>🕒 Monday – Sunday: 08:00 – 22:00</p>
        </div>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
      
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your message..."
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="primary-button">
          Send 
        </button>

        {submitted && (
          <p className="success-message">
            Thank you! Your message has been received.
          </p>
        )}
      </form>
    </section>
  );
}

export default Contact;