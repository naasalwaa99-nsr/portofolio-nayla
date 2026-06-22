import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

function Experience() {
  return (
    <>
      <Navbar />

      <section className="section page">

        <span className="section-tag">
          EXPERIENCE
        </span>

        <h1 className="about-title">
  My Journey
  <span className="emoji"> 🚀</span>
</h1>

        <div className="experience-showcase">

          <div className="experience-card">

            <div className="experience-header">
              <span className="experience-badge">
                PKL
              </span>

              <span className="experience-date">
                Mei 2026 – Maret 2027
              </span>
            </div>

            <h3>
              Praktik Kerja Lapangan
            </h3>

            <div className="info-box">
  <a
    href="https://permanasolutions.com/"
    target="_blank"
    rel="noopener noreferrer"
  >
    PT Medianusa Permana (Permana Solutions)
  </a>
</div>

            <ul className="experience-list">
              <li>Melakukan software testing pada aplikasi web</li>
              <li>Membuat dokumentasi sistem dan test case</li>
              <li>Membuat desain (UI) menggunakan Figma</li>

            </ul>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Experience;