import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
function Contact() {
  return (
    <>
      <Navbar />

      <section className="section page">
        <h2>Contact</h2>

        <div className="contact-links">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=naasalwaa99@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            📧 Email Saya
          </a>

          <a
            href="https://wa.me/6285773581351"
            target="_blank"
            rel="noopener noreferrer"
          >
            📱 WhatsApp
          </a>

          <a
            href="https://instagram.com/_naasalwaa"
            target="_blank"
            rel="noopener noreferrer"
          >
            📷 Instagram
          </a>

          <a>📍 Jakarta Barat</a>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;