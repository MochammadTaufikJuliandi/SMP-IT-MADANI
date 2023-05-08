import React from "react";
import '../style/Navbar.css';

function Navbar() {
  return (
<header className="app-bar">
  <div className="app-bar__menu">
    <button id="hamburgerButton">☰</button>
  </div>
  <div className="app-bar__brand">
    <h1>SMP IT MADANI</h1>
  </div>
  <nav id="navigationDrawer" className="app-bar__navigation">
    <ul>
      <li><a href="#/now-playing">Beranda</a></li>
      <li><a href="#/upcoming">Tentang</a></li>
      <li><a href="#/like">Kegiatan</a></li>
    </ul>
  </nav>
</header>
  );
}

export default Navbar;