import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <Link to="/">databyte</Link>
        <Link to="/">Explore</Link>
        <Link to="/lessons">Lessons</Link>
        <Link to="/quizzes/0">Quizzes</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/signin">Sign In</Link>
    </nav>

  );
}

export default Navbar;
