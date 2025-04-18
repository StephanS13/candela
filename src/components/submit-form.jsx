import { useState } from "react";
import { useLanguage } from '../contexts/LanguageContext'
import '../assets/submit-form.css'


const FormComponent = () => {
  const [formData, setFormData] = useState({ email: "", message: "" });
  const [status, setStatus] = useState("");
  const { language } = useLanguage();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("http://candelafilms.fr/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Email envoyé avec succès");
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
        placeholder={ language === 'EN' ? "Votre email" : "Your Email" }
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder={ language === 'EN' ? "Tapez votre message..." : "Your Message..."}
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
