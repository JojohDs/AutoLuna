function Footer() {
  return (
    <footer className="footer">

      <div className="footer-conteudo">

        <img src="../assets/AutoLuna.02.png" alt="logo" className="footer-logo"/>

        <div className="footer-redes">

          <a href="#" aria-label="Instagram">
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a href="#" aria-label="Facebook">
            <i className="fa-brands fa-facebook-f"></i>
          </a>

          <a href="#" aria-label="TikTok">
            <i className="fa-brands fa-tiktok"></i>
          </a>

        </div>

      </div>

      <div className="footer-bottom">
        © 2026 AutoLuna — Veículos que movem você.
      </div>

    </footer>
  );
}

export default Footer;