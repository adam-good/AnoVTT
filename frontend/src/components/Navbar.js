
import "./Navbar.css";

function Navbar() {
  return (
    <nav class='navbar'>
    <div class='navbar-center'>
    <ul class='nav-links'>
      <li>Character Sheets</li>
      <li>Campaigns</li>
      <li>Game Table</li>
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
