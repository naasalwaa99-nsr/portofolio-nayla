import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import profilePhoto from "../assets/nelong.jpg";
import { useState } from "react";

function Home() {
  const [showImage, setShowImage] = useState(false);
  return (
    <>
      <Navbar />

      <main className="hero">
        <div className="hero-left">
          <span className="subtitle">
            GET TO KNOW ME
          </span>

          <h1>Hello 👋, I'm Nayla Salwa Ramadhani</h1>

          <h2>
            Siswi SMK - Sistem Informasi Jaringan dan Aplikasi
          </h2>

          <p>
            Siswi SMK Negeri 1 Jakarta jurusan SIJA yang memiliki
            motivasi tinggi untuk PKL, mengembangkan keterampilan
            di bidang website, jaringan komputer,
            dan software testing.
          </p>
        </div>

        <div className="hero-right">
          <div className="profile-card">
            <div className="card-top"></div>

            <div className="avatar">
  <img
    src={profilePhoto}
    alt="Nayla Salwa Ramadhani"
    onClick={() => setShowImage(true)}
  />
</div>

{showImage && (
  <div
    className="modal"
    onClick={() => setShowImage(false)}
  >
    <img
      src={profilePhoto}
      alt="Nayla Salwa Ramadhani"
      className="modal-image"
    />
  </div>
)}

            <span className="status">
              READY FOR INTERNSHIP
            </span>

            <h3>
              Web & Network 
            </h3>

            <div className="info-box">
  <a
    href="https://smkn1jakarta.sch.id"
    target="_blank"
    rel="noopener noreferrer"
  >
    🏫 SMKN 1 Jakarta
  </a>
</div>

<div className="info-box">
  <a
    href="https://smkn1jakarta.sch.id/sija/"
    target="_blank"
    rel="noopener noreferrer"
  >
    💻 SIJA
  </a>
</div>

<div className="info-box">
  <p>📅 2023 - 2027</p>
</div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Home;