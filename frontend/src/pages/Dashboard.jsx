import Sidebar from "../components/Sidebar";
import { useVehicles } from "../context/VehicleContext";

function Dashboard() {
  const { vehicles } = useVehicles();

  const available = vehicles.filter(
    (vehicle) => vehicle.status === "Disponível"
  ).length;

  const sold = vehicles.filter(
    (vehicle) => vehicle.status === "Vendido"
  ).length;

  const totalValue = vehicles.reduce(
    (total, vehicle) => total + vehicle.preco,
    0
  );

  const averagePrice =
    vehicles.length > 0 ? totalValue / vehicles.length : 0;

  return (
    <div className="admin-layout">
      <Sidebar />

      <section className="dashboard">
        <div className="dashboard-header">
          <span className="section-label">AUTO LUNA</span>

          <h1>Dashboard</h1>

          <p>Visão geral dos veículos cadastrados.</p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <p>Total de veículos</p>
            <strong>{vehicles.length}</strong>
          </div>

          <div className="stat-card">
            <p>Disponíveis</p>
            <strong>{available}</strong>
          </div>

          <div className="stat-card">
            <p>Vendidos</p>
            <strong>{sold}</strong>
          </div>

          <div className="stat-card">
            <p>Preço médio</p>

            <strong>
              R${" "}
              {averagePrice.toLocaleString("pt-BR", {
                maximumFractionDigits: 0,
              })}
            </strong>
          </div>
        </div>

        <div className="dashboard-panel">
          <div className="section-header">
            <span className="section-label">ESTOQUE</span>

            <h2>Veículos recentes</h2>
          </div>

          <div className="dashboard-list">
            {vehicles
              .slice(-4)
              .reverse()
              .map((vehicle) => (
                <div
                  className="dashboard-list-item"
                  key={vehicle.id}
                >
                  <div>
                    <strong>
                      {vehicle.marca} {vehicle.modelo}
                    </strong>

                    <span>
                      {vehicle.ano} • {vehicle.categoria}
                    </span>
                  </div>

                  <strong>
                    R$ {vehicle.preco.toLocaleString("pt-BR")}
                  </strong>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;