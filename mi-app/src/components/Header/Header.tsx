import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="site-header">
      <nav>
        <ul>
          <li><a href="#proyecto">Proyecto</a></li>
          <li><a href="#equipo">Equipo</a></li>
          <li><a href="#tecnologias">Tecnologías</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header; 