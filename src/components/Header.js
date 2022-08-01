import { NavLink } from 'react-router-dom';
import '../styles/Header.scss';

const Header = () => {
  return (
    <>
      <header className="header">
        AUTOTECH STEVE
        <span>Car Audio Service</span>
      </header>
      <nav className="nav-links">
        <NavLink id="home" className={({ isActive }) => (isActive ? 'selected' : undefined)} to="/">
          Home
        </NavLink>
        <NavLink
          id="services"
          className={({ isActive }) => (isActive ? 'selected' : undefined)}
          to="/services"
        >
          Services
        </NavLink>
        <NavLink
          id="contact"
          className={({ isActive }) => (isActive ? 'selected' : undefined)}
          to="/contact"
        >
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
