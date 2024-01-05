import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <img
        onClick={() => navigate("/home")}
        src={require("../assets/cinematography-logo.png")}
        alt="cinematography-logo "
        height="100px"
      />
      <div className="menu" onClick={() => setMenuOpen((prev) => !prev)}>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to={"/home"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/allmovies"}>All Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
