import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for contacting StayFinder!");

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="section">
      <div className="section-heading">
        <h2>Contact Us</h2>
        <p>Have a question? Get in touch with us.</p>
      </div>

      <div className="search-box">
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <div className="search-field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <br />

          <div className="search-field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <br />

          <div className="search-field">
            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: "100%",
                padding: "12px",
                border: "1px solid #e5e7eb",
                borderRadius: "8px",
                resize: "vertical",
              }}
            />
          </div>

          <br />

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;