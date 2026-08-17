import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import VehicleCard from "../components/VehicleCard";
import { getVehicles } from "../services/vehicleService";

function Veiculos() {
  const [searchParams] = useSearchParams();

  const initialBrand = searchParams.get("marca") || "";

  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState(initialBrand);
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");

  const vehicles = getVehicles();

  const brands = [...new Set(
    vehicles.map((vehicle) => vehicle.marca)
  )];

  const categories = [...new Set(
    vehicles.map((vehicle) => vehicle.categoria)
  )];

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {

      const searchText =
        `${vehicle.marca} ${vehicle.modelo}`.toLowerCase();

      const matchesSearch =
        searchText.includes(search.toLowerCase());

      const matchesBrand =
        !brand || vehicle.marca === brand;

      const matchesCategory =
        !category || vehicle.categoria === category;

      const matchesStatus =
        !status || vehicle.status === status;

      return (
        matchesSearch &&
        matchesBrand &&
        matchesCategory &&
        matchesStatus
      );
    });
  }, [
    vehicles,
    search,
    brand,
    category,
    status,
  ]);

  function clearFilters() {
    setSearch("");
    setBrand("");
    setCategory("");
    setStatus("");
  }

  return (
    <div className="admin-layout">

      <Sidebar />

      <section className="vehicles-page">

        <div className="page-header">

          <div>
      
            <h1>
              Veículos
            </h1>

            <p>
              Encontre o veículo ideal para você.
            </p>
          </div>

          <Link
            to="/veiculos/novo"
            className="button button-primary"
          >
            + Cadastrar veículo
          </Link>

        </div>

        <div className="filters">

          <input
            type="search"
            placeholder="Pesquisar marca ou modelo..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />

          <select
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          >
            <option value="">
              Todas as marcas
            </option>

            {brands.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="">
              Todas as categorias
            </option>

            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <select
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option value="">
              Todos os status
            </option>

            <option value="Disponível">
              Disponível
            </option>

            <option value="Vendido">
              Vendido
            </option>
          </select>

          <button
            className="clear-filter"
            onClick={clearFilters}
          >
            Limpar
          </button>

        </div>

        <div className="results-info">
          {filteredVehicles.length} veículo(s) encontrado(s)
        </div>

        <div className="vehicle-grid">

          {filteredVehicles.length > 0 ? (
            filteredVehicles.map((vehicle) => (
              <VehicleCard
                key={vehicle.id}
                vehicle={vehicle}
              />
            ))
          ) : (
            <div className="empty-state">
              <h2>
                Nenhum veículo encontrado
              </h2>

              <p>
                Tente alterar os filtros da pesquisa.
              </p>
            </div>
          )}

        </div>

      </section>

    </div>
  );
}

export default Veiculos;