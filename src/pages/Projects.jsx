import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";

function Projects() {
  return (
    <>
      <Navbar />

      <section className="section page">
        <h2>Projects</h2>

        <div className="projects-showcase">

          <div className="project-showcase-card">
            <div className="project-preview">
              🌐
            </div>

            <div className="project-info">
              <span className="project-tag">
                React • CSS • Vite
              </span>

              <h3>Portfolio Website</h3>

              <p>
                Website portofolio pribadi dengan desain modern
                dan responsif menggunakan React JS.
              </p>

              <button>Lihat Project</button>
            </div>
          </div>

          <div className="project-showcase-card">
            <div className="project-preview">
              🎨
            </div>

            <div className="project-info">
              <span className="project-tag">
                Figma • UI/UX
              </span>

              <h3>UI Design Project</h3>

              <p>
                Mendesain wireframe, prototype, dan tampilan
                aplikasi menggunakan Figma.
              </p>

              <button>Lihat Design</button>
            </div>
          </div>

          <div className="project-showcase-card">
            <div className="project-preview">
              🖥️
            </div>

            <div className="project-info">
              <span className="project-tag">
                Cisco • Networking
              </span>

              <h3>Network Simulation</h3>

              <p>
                Simulasi topologi jaringan komputer menggunakan
                Cisco Packet Tracer.
              </p>

              <button>Lihat Detail</button>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Projects;