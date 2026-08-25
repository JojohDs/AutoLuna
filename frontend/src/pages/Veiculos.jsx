import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import VehicleCard from "../components/VehicleCard";
import {
  getVehicles,
  deleteVehicle,
  markVehicleAsSold,
} from "../api/vehicleApi";

function Veiculos() {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState("");

  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const [status, setStatus] = useState("Todos");
  const [precoMaximo, setPrecoMaximo] = useState("");

  useEffect(() => {
    async function carregarVeiculos() {
      try {
        setLoading(true);
        const dados = await getVehicles();
        setVehicles(dados);
      } catch (error) {
        setErro("Não foi possível carregar os veículos.");
      } finally {
        setLoading(false);
      }
    }

    carregarVeiculos();
  }, []);

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
      precoMaximo === "" || vehicle.preco <= Number(precoMaximo);

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

      setVehicles((current) =>
        current.filter((vehicle) => vehicle.id !== id)
      );
    } catch (error) {
      alert("Erro ao excluir veículo.");
    }
  }

  async function handleSell(vehicle) {
    try {
      const atualizado = await markVehicleAsSold(vehicle.id, vehicle);

      setVehicles((current) =>
        current.map((item) =>
          item.id === vehicle.id ? atualizado : item
        )
      );
    } catch (error) {
      alert("Erro ao marcar veículo como vendido.");
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
            <option value="Utilitario">Utilitário</option>
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

          <button onClick={limparFiltros}>Limpar filtros</button>
        </section>

        {loading && <p>Carregando veículos...</p>}

        {erro && <p>{erro}</p>}

        {!loading && !erro && (
          <>
            <p>{veiculosFiltrados.length} veículo(s) encontrado(s)</p>

            <section className="lista-veiculos">
              {veiculosFiltrados.length > 0 ? (
                veiculosFiltrados.map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    onDelete={handleDelete}
                    onSell={handleSell}
                    showActions
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