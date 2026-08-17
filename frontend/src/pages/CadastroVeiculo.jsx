import { useState } from "react";

function CadastroVeiculo() {
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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Veículo cadastrado:", formulario);

    alert("Veículo cadastrado com sucesso!");

    setFormulario({
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
  };

  return (
    <main className="pagina-cadastro-veiculo">
      <section className="cabecalho-pagina">
        <div>
          <h1>Cadastrar veículo</h1>
          <p>
            Preencha as informações abaixo para adicionar um veículo à loja.
          </p>
        </div>
      </section>

      <section className="formulario-container">
        <form onSubmit={handleSubmit} className="formulario-veiculo">

          <div className="formulario-grupo">
            <label htmlFor="marca">Marca</label>

            <input
              type="text"
              id="marca"
              name="marca"
              value={formulario.marca}
              onChange={handleChange}
              placeholder="Ex.: Toyota"
              required
            />
          </div>

          <div className="formulario-grupo">
            <label htmlFor="modelo">Modelo</label>

            <input
              type="text"
              id="modelo"
              name="modelo"
              value={formulario.modelo}
              onChange={handleChange}
              placeholder="Ex.: Corolla"
              required
            />
          </div>

          <div className="formulario-linha">

            <div className="formulario-grupo">
              <label htmlFor="ano">Ano</label>

              <input
                type="number"
                id="ano"
                name="ano"
                value={formulario.ano}
                onChange={handleChange}
                placeholder="2025"
                required
              />
            </div>

            <div className="formulario-grupo">
              <label htmlFor="quilometragem">
                Quilometragem
              </label>

              <input
                type="number"
                id="quilometragem"
                name="quilometragem"
                value={formulario.quilometragem}
                onChange={handleChange}
                placeholder="50000"
                required
              />
            </div>

          </div>

          <div className="formulario-linha">

            <div className="formulario-grupo">
              <label htmlFor="preco">Preço</label>

              <input
                type="number"
                id="preco"
                name="preco"
                value={formulario.preco}
                onChange={handleChange}
                placeholder="75000"
                required
              />
            </div>

            <div className="formulario-grupo">
              <label htmlFor="cor">Cor</label>

              <input
                type="text"
                id="cor"
                name="cor"
                value={formulario.cor}
                onChange={handleChange}
                placeholder="Preto"
              />
            </div>

          </div>

          <div className="formulario-linha">

            <div className="formulario-grupo">
              <label htmlFor="combustivel">
                Combustível
              </label>

              <select
                id="combustivel"
                name="combustivel"
                value={formulario.combustivel}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="Flex">Flex</option>
                <option value="Gasolina">Gasolina</option>
                <option value="Etanol">Etanol</option>
                <option value="Diesel">Diesel</option>
                <option value="Eletrico">Elétrico</option>
                <option value="Hibrido">Híbrido</option>
              </select>
            </div>

            <div className="formulario-grupo">
              <label htmlFor="cambio">Câmbio</label>

              <select
                id="cambio"
                name="cambio"
                value={formulario.cambio}
                onChange={handleChange}
                required
              >
                <option value="">Selecione</option>
                <option value="Manual">Manual</option>
                <option value="Automatico">Automático</option>
                <option value="CVT">CVT</option>
              </select>
            </div>

          </div>

          <div className="formulario-grupo">
            <label htmlFor="categoria">
              Categoria
            </label>

            <select
              id="categoria"
              name="categoria"
              value={formulario.categoria}
              onChange={handleChange}
              required
            >
              <option value="">Selecione</option>
              <option value="Hatch">Hatch</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Pickup">Pickup</option>
              <option value="Esportivo">Esportivo</option>
              <option value="Utilitario">Utilitário</option>
            </select>
          </div>

          <div className="formulario-grupo">
            <label htmlFor="imagem">
              URL da imagem
            </label>

            <input
              type="url"
              id="imagem"
              name="imagem"
              value={formulario.imagem}
              onChange={handleChange}
              placeholder="https://..."
            />
          </div>

          <div className="formulario-grupo">
            <label htmlFor="descricao">
              Descrição
            </label>

            <textarea
              id="descricao"
              name="descricao"
              value={formulario.descricao}
              onChange={handleChange}
              placeholder="Digite uma descrição do veículo..."
              rows="5"
            />
          </div>

          <div className="formulario-acoes">
            <button
              type="button"
              className="botao-secundario"
              onClick={() =>
                window.history.back()
              }
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