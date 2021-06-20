import { useTranslation } from "react-i18next";
import "./Navbar.scss";
import { Link } from "react-scroll";

export const Navbar = () => {
  const { t } = useTranslation();

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
            {t("navbar.home")}
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
            {t("navbar.about")}
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
            {t("navbar.experience")}
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
            {t("navbar.contact")}
          </Link>
        </li>
        <li className="navbar-list-item">
          <a href="https://www.geekvilag.hu"> {t("navbar.blog")}</a>
        </li>
      </ul>
    </div>
  );
};
