import { useState } from "react";

import Sidebar from "../components/Sidebar";
import VehicleCard from "../components/VehicleCard";
import { useVehicles } from "../context/VehicleContext";

function Veiculos() {
  const {
    vehicles,
    loading,
    deleteVehicle,
    markAsSold,
  } = useVehicles();

  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [status, setStatus] = useState("Todos");
  const [precoMaximo, setPrecoMaximo] = useState("");

  const veiculosFiltrados = vehicles.filter((vehicle) => {
    const termo = busca.toLowerCase();

    const correspondeBusca =
      vehicle.marca.toLowerCase().includes(termo) ||
      vehicle.modelo.toLowerCase().includes(termo);

    const correspondeCategoria =
      categoria === "Todas" || vehicle.categoria === categoria;

    const correspondeStatus =
      status === "Todos" || vehicle.status === status;

    const correspondePreco =
      precoMaximo === "" ||
      Number(vehicle.preco) <= Number(precoMaximo);

    return (
      correspondeBusca &&
      correspondeCategoria &&
      correspondeStatus &&
      correspondePreco
    );
  });

  function limparFiltros() {
    setBusca("");
    setCategoria("Todas");
    setStatus("Todos");
    setPrecoMaximo("");
  }

  async function handleDelete(id) {
    try {
      await deleteVehicle(id);

      alert("Veículo excluído com sucesso!");
    } catch (error) {
      alert(error.message || "Erro ao excluir veículo.");
    }
  }

  async function handleSell(vehicle) {
    try {
      await markAsSold(vehicle.id);

      alert("Veículo marcado como vendido!");
    } catch (error) {
      alert(error.message || "Erro ao marcar veículo como vendido.");
    }
  }

  return (
    <div className="pagina-veiculos">
      <Sidebar />

      <main className="conteudo-veiculos">
        <header className="cabecalho-veiculos">
          <span>AutoLuna</span>

          <h1>Veículos</h1>

          <p>Gerencie os veículos cadastrados.</p>
        </header>

        <section className="filtros">
          <input
            type="text"
            placeholder="Pesquisar marca ou modelo"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />

          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="Todas">Todas as categorias</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Hatch">Hatch</option>
            <option value="Pickup">Pickup</option>
            <option value="Esportivo">Esportivo</option>
            <option value="Utilitário">Utilitário</option>
          </select>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Todos">Todos os status</option>
            <option value="Disponível">Disponíveis</option>
            <option value="Vendido">Vendidos</option>
          </select>

          <input
            type="number"
            placeholder="Preço máximo"
            value={precoMaximo}
            onChange={(e) => setPrecoMaximo(e.target.value)}
          />

          <button onClick={limparFiltros}>
            Limpar filtros
          </button>
        </section>

        {loading && <p>Carregando veículos...</p>}

        {!loading && (
          <>
            <p>
              {veiculosFiltrados.length} veículo(s) encontrado(s)
            </p>

            <section className="lista-veiculos">
              {veiculosFiltrados.length > 0 ? (
                veiculosFiltrados.map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    onDelete={handleDelete}
                    onSell={handleSell}
                  />
                ))
              ) : (
                <p>Nenhum veículo encontrado.</p>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default Veiculos;