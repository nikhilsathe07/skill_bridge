import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/logo5.png'; // ✅ import the image

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Skill Bridge Logo" className="logo" /> {/* ✅ use the imported image */}
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/courses" className="nav-link">Courses</Link>
        <Link to="/mentors" className="nav-link">Mentors</Link>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/upload" className="nav-link">Upload Work</Link>
        <Link to="/forum" className="nav-link">Forum</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </nav>
    </header>
  );
}

export default Header;
