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
          My Journey 🚀
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

            <h4>
              PT Medianusa Permana (Permana Solutions)
            </h4>

            <ul className="experience-list">
              <li>Melakukan software testing pada aplikasi web</li>
              <li>Membuat dokumentasi sistem dan test case</li>
              <li>Membuat desain antarmuka (UI) menggunakan Figma</li>
              <li>Berkolaborasi dalam pengembangan website</li>
            </ul>

          </div>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default Experience;