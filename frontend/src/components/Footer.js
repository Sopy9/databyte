import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <Link to="/">Explore</Link>
      |
      <Link to="/lessons">Lessons</Link>
      |
      <Link to="/quizzes/0">Quizzes</Link>
      |
      <Link to="/dashboard">Dashboard</Link>
    </footer>
  );
}

export default Footer;