import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar-logo">
      <img src="/assets/AutoLuna.png" alt="logo" />
        <strong>AutoLuna</strong>
      </div>

      <nav className="sidebar-navigation">

        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/veiculos"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
           Veículos
        </NavLink>

        <NavLink
          to="/veiculos/novo"
          className={({ isActive }) =>
            isActive ? "sidebar-link active" : "sidebar-link"
          }
        >
           Cadastrar veículo
        </NavLink>

        <NavLink to="/" className="sidebar-link">
           Voltar para loja
        </NavLink>

      </nav>
    </aside>
  );
}

export default Sidebar;