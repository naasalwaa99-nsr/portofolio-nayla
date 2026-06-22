import { Link } from "react-router-dom";
import "../App.css";
function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Portofolio.</div>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Navbar;