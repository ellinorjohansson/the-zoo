import { Link, NavLink } from 'react-router';
import { useState } from 'react';
import './header.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <Link to={`/`}>
        <button className="logo">The ZOO</button>
      </Link>

      <button className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="menu-text hamburger">
          {menuOpen ? 'Stäng' : 'Meny'}
        </span>
      </button>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Hem
            </NavLink>
          </li>
          <li>
            <NavLink to="/animals" onClick={toggleMenu}>
              Djuren
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
