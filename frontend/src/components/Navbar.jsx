import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class='navbar'>
    <div class='navbar-center'>
    <ul class='nav-links'>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/character-sheet">Character Sheet</Link></li>
      <li><Link to="/campaign">Campaign</Link></li>
      <li><Link to="/table">Game Table</Link></li>
    </ul>
    </div>
    <div class='navbar-right'>
    <ul class='nav-links'>
      <li>Login</li>
    </ul>
    </div>
    </nav>
  );
}

export default Navbar;
