import Sidebar from "../components/Sidebar";
import { getVehicles } from "../services/vehicleService";

function Dashboard() {
  const vehicles = getVehicles();

  const available = vehicles.filter(
    (vehicle) => vehicle.status === "Disponível"
  ).length;

  const sold = vehicles.filter(
    (vehicle) => vehicle.status === "Vendido"
  ).length;

  const averagePrice =
    vehicles.length > 0
      ? vehicles.reduce(
          (total, vehicle) => total + Number(vehicle.preco),
          0
        ) / vehicles.length
      : 0;

  return (
    <div className="admin-layout">

      <Sidebar />

      <section className="dashboard">

        <div className="dashboard-header">
          <div>
            <span className="section-label">
              AUTO LUNA
            </span>

            <h1>
              Dashboard
            </h1>

            <p>
              Visão geral dos veículos cadastrados.
            </p>
          </div>
        </div>

        <div className="stats-grid">

          <div className="stat-card">
            <span>🚗</span>

            <p>Total de veículos</p>

            <strong>
              {vehicles.length}
            </strong>
          </div>

          <div className="stat-card">
            <span>✓</span>

            <p>Disponíveis</p>

            <strong>
              {available}
            </strong>
          </div>

          <div className="stat-card">
            <span>●</span>

            <p>Vendidos</p>

            <strong>
              {sold}
            </strong>
          </div>

          <div className="stat-card">
            <span>R$</span>

            <p>Preço médio</p>

            <strong>
              R$ {averagePrice.toLocaleString("pt-BR", {
                maximumFractionDigits: 0,
              })}
            </strong>
          </div>

        </div>

        <div className="dashboard-panel">

          <div className="section-header">
            <div>
              <span className="section-label">
                ESTOQUE
              </span>

              <h2>
                Veículos recentes
              </h2>
            </div>
          </div>

          <div className="dashboard-list">

            {vehicles.slice(-4).reverse().map((vehicle) => (
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