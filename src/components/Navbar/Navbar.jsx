import "./Navbar.scss";
import { Route, NavLink, HashRouter } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <NavLink to="/"> Home</NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink to="/experience">Experience</NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li className="navbar-list-item">
          <NavLink to="/blog">Blog</NavLink>
        </li>
      </ul>
    </div>
  );
};
