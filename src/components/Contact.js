import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => {
    // Simple email regex
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    let errorMsg = '';

    if (!value) {
      errorMsg = 'This field is required';
    } else if (name === 'email' && !validateEmail(value)) {
      errorMsg = 'Invalid email address';
    }

    setErrors({ ...errors, [name]: errorMsg });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && <span>{errors.name}</span>}

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && <span>{errors.email}</span>}

        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.message && <span>{errors.message}</span>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;