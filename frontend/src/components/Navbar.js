import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/" className="navbar-logo">databyte</Link>
        <div className="navbar-links">
          <Link to="/">Explore</Link>
          <Link to="/lessons">Lessons</Link>
          <Link to="/quizzes/0">Quizzes</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/signin" className="signin-btn">Sign In</Link>
        </div>
    </nav>

  );
}

export default Navbar;
