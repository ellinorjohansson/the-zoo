import { NavLink } from 'react-router';
import { useState } from 'react';
import './header.scss';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className={`header ${menuOpen ? 'open' : ''}`}>
      <h1 className="logo">The ZOO</h1>

      <button className="hamburger" onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
        <span className="menu-text hamburger">
          {menuOpen ? 'Close' : 'Menu'}
        </span>
      </button>

      <nav className={`nav ${menuOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/animals" onClick={toggleMenu}>
              Animals
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
