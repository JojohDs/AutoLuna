import { useState } from "react";
import { Link } from "react-router-dom";

import VehicleCard from "../components/VehicleCard";
import { getVehicles } from "../services/vehicleService";

function Home() {
  const [search, setSearch] = useState("");

  const vehicles = getVehicles();

  const featuredVehicles = vehicles
    .filter((vehicle) => vehicle.status === "Disponível")
    .filter((vehicle) => {
      const text = `${vehicle.marca} ${vehicle.modelo}`.toLowerCase();

      return text.includes(search.toLowerCase());
    })
    .slice(0, 3);

  return (
    <>

      <section className="hero">

        <div className="hero-content">
          <h1>
            Encontre o carro
            <span> ideal para você.</span>
          </h1>

          <p>
            Pesquise e busque a sua verdadeira
            felicidade sobre quatro rodas. Aqui você encontra os melhores veículos do mercado.
          </p>

          <div className="hero-search">

            <input
              type="search"
              placeholder="Busque o seu sonho..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />

            <Link to="/veiculos">
              Buscar
            </Link>

          </div>

        </div>

      </section>

      <section className="home-section">

        <div className="section-header">
          <div>
            <h2>
              Novidades da loja
            </h2>
          </div>

          <Link to="/veiculos" className="see-all">
            Ver todos
          </Link>
        </div>

        <div className="vehicle-grid">

          {featuredVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle}/>
          ))}

        </div>

      </section>

      <section className="brands-section" id="servicos">

        <div className="section-header">
          <div>
            <h2>
              Principais marcas
            </h2>
          </div>
        </div>

        <div className="brands">

          {["Toyota", "Honda", "Fiat", "Chevrolet", "Jeep"].map(
            (brand) => (
              <Link  key={brand} to={`/veiculos?marca=${brand}`} className="brand">
                {brand}
              </Link>
            )
          )}

        </div>

      </section>

      <section className="home-callout" id="ajuda">

        <div>
          <h2>
            Seu próximo carro pode estar aqui.
          </h2>

          <p>
            Encontre veículos de diferentes marcas,
            categorias e faixas de preço.
          </p>
        </div>

        <Link to="/veiculos">
          Explorar veículos
        </Link>

      </section>

    </>
  );
}

export default Home;