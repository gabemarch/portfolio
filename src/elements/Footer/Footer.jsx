import "./Footer.scss";

export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-name">Gabor Szilagyi</p>
      <p className="footer-copyright">Copyright {new Date().getFullYear()} </p>
    </div>
  );
};
