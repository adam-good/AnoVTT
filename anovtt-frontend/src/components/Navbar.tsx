import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className='navbar'>
    <div className='navbar-center'>
    <ul className='nav-links'>
      <li><Link to="/">Home</Link></li>      
      <li><Link to="/character-sheet">Character Sheet</Link></li>
      <li><Link to="/campaign">Campaign</Link></li>
      <li><Link to="/table">Game Table</Link></li>
    </ul>
    </div>
    <div className='navbar-right'>
    <ul className='nav-links'>
      <li><Link to="/signup">Signup</Link></li>
    </ul>
    </div>
    </nav>
  );
}

export default Navbar;
