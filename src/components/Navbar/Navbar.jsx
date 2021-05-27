import "./Navbar.scss";
import { Link } from "react-scroll";

export const Navbar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-list-item">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>
        <li className="navbar-list-item">
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
        </li>
        <li className="navbar-list-item">
          <Link
            activeClass="active"
            to="experiences"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Experience
          </Link>
        </li>
        <li className="navbar-list-item">
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </li>
        <li className="navbar-list-item">
          <a href="https://www.geekvilag.hu">Blog</a>
        </li>
      </ul>
    </div>
  );
};
