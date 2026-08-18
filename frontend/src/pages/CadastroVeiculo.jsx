
          import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useVehicles } from "../context/VehicleContext";

function CadastroVeiculo() {
  const navigate = useNavigate();
  const { addVehicle } = useVehicles();

  const [formulario, setFormulario] = useState({
    marca: "",
    modelo: "",
    ano: "",
    quilometragem: "",
    preco: "",
    cor: "",
    combustivel: "",
    cambio: "",
    categoria: "",
    descricao: "",
    imagem: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormulario((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    addVehicle(formulario);

    alert("Veículo cadastrado com sucesso!");

    navigate("/veiculos");
  }

  return (
    <main className="pagina-cadastro-veiculo">
      <section className="cabecalho-pagina">
        <h1>Cadastrar veículo</h1>

        <p>
          Preencha as informações para adicionar um veículo.
        </p>
      </section>

      <section className="formulario-container">
        <form
          onSubmit={handleSubmit}
          className="formulario-veiculo"
        >
          <div className="formulario-grupo">
            <label>Marca</label>

            <input
              name="marca"
              value={formulario.marca}
              onChange={handleChange}
              placeholder="Ex.: Toyota"
              required
            />
          </div>

          <div className="formulario-grupo">
            <label>Modelo</label>

            <input
              name="modelo"
              value={formulario.modelo}
              onChange={handleChange}
              placeholder="Ex.: Corolla"
              required
            />
          </div>

          <div className="formulario-linha">
            <div className="formulario-grupo">
              <label>Ano</label>

              <input
                type="number"
                name="ano"
                value={formulario.ano}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formulario-grupo">
              <label>Quilometragem</label>

              <input
                type="number"
                name="quilometragem"
                value={formulario.quilometragem}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="formulario-linha">
            <div className="formulario-grupo">
              <label>Preço</label>

              <input
                type="number"
                name="preco"
                value={formulario.preco}
                onChange={handleChange}
                required
              />
            </div>

            <div className="formulario-grupo">
              <label>Cor</label>

              <input
                name="cor"
                value={formulario.cor}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="formulario-linha">
            <div className="formulario-grupo">
              <label>Combustível</label>

              <select
                name="combustivel"
                value={formulario.combustivel}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option>Flex</option>
                <option>Gasolina</option>
                <option>Etanol</option>
                <option>Diesel</option>
                <option>Elétrico</option>
                <option>Híbrido</option>
              </select>
            </div>

            <div className="formulario-grupo">
              <label>Câmbio</label>

              <select
                name="cambio"
                value={formulario.cambio}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option>Manual</option>
                <option>Automático</option>
                <option>CVT</option>
              </select>
            </div>
          </div>

          <div className="formulario-grupo">
            <label>Categoria</label>

            <select
              name="categoria"
              value={formulario.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option>Hatch</option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Pickup</option>
              <option>Esportivo</option>
              <option>Utilitário</option>
            </select>
          </div>

          <div className="formulario-grupo">
            <label>URL da imagem</label>

            <input
              type="url"
              name="imagem"
              value={formulario.imagem}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className="formulario-grupo">
            <label>Descrição</label>

            <textarea
              name="descricao"
              value={formulario.descricao}
              onChange={handleChange}
              rows="5"
            />
          </div>

          <div className="formulario-acoes">
            <button
              type="button"
              className="botao-secundario"
              onClick={() => navigate("/veiculos")}
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="botao-principal"
            >
              Cadastrar veículo
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default CadastroVeiculo;