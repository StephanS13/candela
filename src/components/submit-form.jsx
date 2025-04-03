import { useState } from "react";
import '../assets/submit-form.css'


const FormComponent = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Email sent successfully!");
        setFormData({ email: "", message: "" });
      } else {
        setStatus("Error: " + data.error);
      }
    } catch (error) {
      setStatus("Error sending email.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Submit</button>
      <p>{status}</p>
    </form>
  );
};

export default FormComponent;
