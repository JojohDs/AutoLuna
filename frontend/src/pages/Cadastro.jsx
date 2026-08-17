import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Button from "../components/Button";

function Cadastro() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  const [error, setError] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.nome || !form.email || !form.senha) {
      setError("Preencha todos os campos.");
      return;
    }

    localStorage.setItem(
      "autoluna_usuario",
      JSON.stringify(form)
    );

    navigate("/dashboard");
  }

  return (
    <section className="auth-page">

      <div className="auth-card">

        <div className="auth-header">

          <h1>
            Criar conta
          </h1>

          <p>
            Cadastre-se para acessar a plataforma.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <label>
            Nome

            <input
              type="text"
              name="nome"
              value={form.nome}
              onChange={handleChange}
              placeholder="Digite seu nome"
            />
          </label>

          <label>
            E-mail

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Digite seu e-mail"
            />
          </label>

          <label>
            Senha

            <input
              type="password"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              placeholder="Digite sua senha"
            />
          </label>

          {error && (
            <p className="form-error">
              {error}
            </p>
          )}

          <Button type="submit">
            Cadastrar
          </Button>

        </form>

        <p className="auth-footer">
          Já possui conta?{" "}
          <Link to="/login">
            Entre aqui
          </Link>
        </p>

      </div>

    </section>
  );
}

export default Cadastro;    