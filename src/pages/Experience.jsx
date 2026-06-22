import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

function Experience() {
  return (
    <>
      <Navbar />

      <section className="section page">
        <h2>Experience</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="experience-card">
  

  <h3>Praktik Kerja Lapangan (PKL)</h3>

  <h4>
    PT Medianusa Permana (Permana Solutions)
  </h4>

  <p className="date">
    Mei 2026 – Maret 2027
  </p>

  <p>
    • Melakukan software testing pada aplikasi web<br/>
    • Membuat dokumentasi sistem dan test case<br/>
    • Membuat desain (UI) menggunakan Figma<br/>
  </p>
</div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Experience;