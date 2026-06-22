import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="section page">

        <span className="section-tag">
          CONTACT
        </span>

        <h1 className="about-title">
          Let's Connect
        </h1>

        <p className="contact-desc">
          Terima kasih telah mengunjungi portofolio saya.
          Jangan ragu untuk menghubungi saya melalui platform berikut.
        </p>

        <div className="contact-grid">

          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=naasalwaa99@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">📧</div>
            <h3>Email</h3>
            <p>naasalwaa99@gmail.com</p>
          </a>

          <a
            href="https://wa.me/6285773581351"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">📱</div>
            <h3>WhatsApp</h3>
            <p>0857-7358-1351</p>
          </a>

          <a
            href="https://instagram.com/_naasalwaa"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <div className="contact-icon">📷</div>
            <h3>Instagram</h3>
            <p>@_naasalwaa</p>
          </a>

          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <h3>Location</h3>
            <p>Jakarta Barat</p>
          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Contact;