import React from "react";
import '../style/Navbar.css';
import { Link }from "react-router-dom";

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
      <li><Link to="#/beranda">Beranda</Link></li>
      <li><Link to="#/tentang">Tentang</Link></li>
      <li><Link to="#/kegiatan">Kegiatan</Link></li>
    </ul>
  </nav>
</header>
  );
}

export default Navbar;