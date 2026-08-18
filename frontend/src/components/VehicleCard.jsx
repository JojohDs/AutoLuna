function VehicleCard({ vehicle, onDelete, onSell }) {
  return (
    <article className="vehicle-card">
      <div className="vehicle-image">
        {vehicle.image ? (
          <img
            src={vehicle.image}
            alt={`${vehicle.marca} ${vehicle.modelo}`}
          />
        ) : (
          <div className="vehicle-placeholder" />
        )}

        <span
          className={`vehicle-status ${vehicle.status.toLowerCase()}`}
        >
          {vehicle.status}
        </span>
      </div>

      <div className="vehicle-info">
        <span className="vehicle-category">
          {vehicle.categoria}
        </span>

        <h3>
          {vehicle.marca} {vehicle.modelo}
        </h3>

        <p className="vehicle-details">
          {vehicle.ano} •{" "}
          {vehicle.quilometragem.toLocaleString("pt-BR")} km
        </p>

        <p className="vehicle-price">
          R$ {vehicle.preco.toLocaleString("pt-BR")}
        </p>

        <button className="vehicle-button">
          Ver detalhes
        </button>

        <div className="vehicle-actions">
              {vehicle.status !== "Vendido" && (
          <button onClick={() => onSell(vehicle.id)}>
              Marcar como vendido
          </button>
  )}

          <button onClick={() => onDelete(vehicle.id)}>
              Excluir
           </button>
          </div>
      </div>
    </article>
  );
}

export default VehicleCard;