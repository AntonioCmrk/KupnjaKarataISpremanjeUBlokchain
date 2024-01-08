import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="logo" onClick={() => navigate("/home")}>
        <img
          src={require("../assets/logo.png")}
          alt="cinematography-logo "
          height="60px"
        />
        <div className="logo-name">
          <span>Tickets</span>
          <span>Purchase</span>
        </div>
      </div>
      <div className="menu" onClick={() => setMenuOpen((prev) => !prev)}>
        <span></span>
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
