import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <NavLink to="/" className="logo">
          <span className="logo-icon"><img src="" alt="" /></span>
          <span>AutoLuna</span>
        </NavLink>

        <nav className="navigation">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Comprar
          </NavLink>

          <NavLink
            to="/veiculos"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Marcas
          </NavLink>

          <a href="#servicos" className="nav-link">
            Serviços
          </a>

          <a href="#ajuda" className="nav-link">
            Cuidar
          </a>
        </nav>

        <NavLink to="/login" className="login-link">
          Entrar
        </NavLink>

      </div>
    </header>
  );
}

export default Header;