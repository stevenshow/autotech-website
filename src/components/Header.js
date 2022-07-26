import { Link } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  return (
    <>
      <header className="header">Autotech Steve</header>
      <nav className="nav-links">
        <Link id="home" className="link" to="/">
          Home
        </Link>
        <Link id="home" className="link" to="/services">
          Services
        </Link>
        <Link id="home" className="link" to="/contact">
          Contact Me
        </Link>
      </nav>
    </>
  );
};

export default Header;
