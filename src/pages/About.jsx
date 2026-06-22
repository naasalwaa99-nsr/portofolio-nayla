import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

function About() {
  return (
    <>
      <Navbar />

      <section className="section page">
        <h2>About Me</h2>

        <p>
          Saya memiliki minat pada pengembangan website,
          jaringan komputer, dan software
          testing. Mampu bekerja secara mandiri maupun
          dalam tim dengan sikap disiplin dan bertanggung jawab.
        </p>

        <h2 style={{marginTop:"50px"}}>Skills</h2>

        <div className="skills-wrapper">
          <div className="skill-group">
            <h3>Hard Skill</h3>

            <div className="skills-grid">
              <div className="skill-card">Instalasi Sistem Operasi</div>
              <div className="skill-card">Dasar Jaringan Komputer</div>
              <div className="skill-card">Microsoft Office</div>
              <div className="skill-card">HTML & CSS</div>
              <div className="skill-card">Pengembangan Website</div>
              <div className="skill-card">Cisco Packet Tracer</div>
            </div>
          </div>

          <div className="skill-group">
            <h3>Soft Skills</h3>

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
        <h2 style={{ marginTop: "50px" }}>Education</h2>

<div className="about-card">
  <h3>🎓 SMK Negeri 1 Jakarta</h3>
  <p>Sistem Informasi Jaringan dan Aplikasi (SIJA)</p>
  <p>2023 - 2027</p>
</div>

<h2 style={{ marginTop: "50px" }}>Career Goal</h2>

<div className="about-card">
  <p>
    Menjadi profesional di bidang Teknologi Informasi yang
    memiliki kemampuan dalam Web Development, Software Testing, dan
    Jaringan Komputer serta terus
    mengembangkan keterampilan melalui pengalaman kerja
    dan pembelajaran berkelanjutan.
  </p>
</div>

<h2 style={{ marginTop: "50px" }}>Fun Facts</h2>

<div className="funfacts-grid">
  <div className="funfact-card">💻 Suka mempelajari teknologi baru</div>
  <div className="funfact-card">📚 Senang belajar secara mandiri</div>
  <div className="funfact-card">🎀 Menyukai desain yang clean dan estetik</div>
  <div className="funfact-card">🤝 Menikmati kerja sama dalam tim</div>
</div>
      </section>

      <Footer />
    </>
  );
}

export default About;