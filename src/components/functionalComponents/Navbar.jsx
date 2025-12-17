import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <div className="dropdown"
           onMouseEnter={() => setDropdown(true)}
           onMouseLeave={() => setDropdown(false)}>
        <span className="dropbtn">LearningReact ▾</span>
        
        {dropdown && (
          <div className="dropdown-content">
            <Link to="/usestate">useState</Link>
            <Link to="/useeffect">useEffect</Link>
            <Link to="/usememo">useMemo</Link>
            <Link to="/useeffectapi">useEffect API</Link>
            <Link to="/useref">useRef</Link>
          </div>
        )}
      </div>

      <Link to="/contact">Contact</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  );
}

export default Navbar;