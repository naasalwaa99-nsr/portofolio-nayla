import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

function About() {
  return (
    <>
      <Navbar />

      <section className="section page">

        <span className="section-tag">
          ABOUT ME
        </span>

        <h1 className="about-title">
          Get To Know Me ✨
        </h1>

        <div className="about-glass-card">
          <p>
            Saya memiliki minat pada pengembangan website,
            jaringan komputer, dan software testing.
            Mampu bekerja secara mandiri maupun dalam tim
            dengan sikap disiplin dan bertanggung jawab.
          </p>
        </div>

        {/* SKILLS */}

        <div className="about-section">
          <h2>Skills</h2>

          <div className="skills-container">

            <div className="glass-card">
              <h3>💻 Hard Skills</h3>

              <div className="skills-grid">
                <div className="skill-card">Instalasi Sistem Operasi</div>
                <div className="skill-card">Dasar Jaringan Komputer</div>
                <div className="skill-card">Microsoft Office</div>
                <div className="skill-card">HTML & CSS</div>
                <div className="skill-card">Pengembangan Website</div>
                <div className="skill-card">Cisco Packet Tracer</div>
              </div>
            </div>

            <div className="glass-card">
              <h3>🌸 Soft Skills</h3>

              <div className="skills-grid">
                <div className="skill-card">Komunikasi Efektif</div>
                <div className="skill-card">Kerja Sama Tim</div>
                <div className="skill-card">Disiplin</div>
                <div className="skill-card">Tanggung Jawab</div>
                <div className="skill-card">Adaptif</div>
                <div className="skill-card">Cepat Belajar</div>
              </div>
            </div>

          </div>
        </div>

        {/* EDUCATION */}

        <div className="about-section">
          <h2>Education</h2>

          <div className="glass-card education-card">
            <h3>🎓 SMK Negeri 1 Jakarta</h3>
            <p>Sistem Informasi Jaringan dan Aplikasi (SIJA)</p>
            <span>2023 - 2027</span>
          </div>
        </div>

        {/* CAREER GOAL */}

        <div className="about-section">
          <h2>Career Goal</h2>

          <div className="glass-card">
            <p>
              Menjadi profesional di bidang Teknologi Informasi
              yang memiliki kemampuan dalam Web Development,
              Software Testing, dan Jaringan Komputer serta
              terus mengembangkan keterampilan melalui pengalaman
              kerja dan pembelajaran berkelanjutan.
            </p>
          </div>
        </div>

        {/* FUN FACTS */}

        <div className="about-section">
          <h2>Fun Facts</h2>

          <div className="funfacts-grid">

            <div className="funfact-card">
              💻 Suka mempelajari teknologi baru
            </div>

            <div className="funfact-card">
              📚 Senang belajar secara mandiri
            </div>

            <div className="funfact-card">
              🎀 Menyukai desain yang clean dan estetik
            </div>

            <div className="funfact-card">
              🤝 Menikmati kerja sama dalam tim
            </div>

          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}

export default About;