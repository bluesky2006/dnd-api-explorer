import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <div className="banner-container">
          <img id="banner" src="src/assets/banner.jpg" alt="Banner" />
          <h1 className="centered">Tome of Threats</h1>
        </div>
      </Link>
      <nav>
        <Link to="/spells" className="nav-item">
          Spells
        </Link>
        <Link to="/monsters" className="nav-item">
          Monsters
        </Link>
      </nav>
    </header>
  );
}

export default Header;
