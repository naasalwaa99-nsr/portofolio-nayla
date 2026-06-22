import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
function Projects() {
  return (
    <>
      <Navbar />

      <section className="section page">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Website Manajemen UKS</h3>

          <p>
            Website untuk pengelolaan data kesehatan sekolah,
            stok obat dan rekam medis siswa menggunakan database.
          </p>
        </div>

        <div className="project-card">
          <h3>Proyek Jaringan Komputer Sekolah</h3>

          <p>
            Merancang topologi jaringan LAN, konfigurasi IP Address
            dan simulasi jaringan menggunakan Cisco Packet Tracer.
          </p>
        </div>

        <div className="project-card">
          <h3>Pengembangan Web melalui VirtualBox</h3>

          <p>
            Mengembangkan aplikasi berbasis web menggunakan
            HTML, CSS dan MariaDB.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Projects;