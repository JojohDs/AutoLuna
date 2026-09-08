import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../api/userApi";


import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!email || !senha) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      const usuario = await loginUser(credential);

      if (usuario.senha !== senha) {
        setError("E-mail ou senha incorretos.");
        return;
      }

      localStorage.setItem(
        "autoluna_usuario",
        JSON.stringify(usuario)
      );

      navigate("/dashboard");

    } catch (error) {
      setError("E-mail ou senha incorretos.");
    }
  }

  return (
    <section className="auth-page">

      <div className="auth-card">

        <div className="auth-header">
          <span className="section-label">
            BEM-VINDO
          </span>

          <h1>
            Entrar
          </h1>

          <p>
            Acesse sua área administrativa.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <label>
            Nome / E-mail

            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Digite seu e-mail"
            />
          </label>

          <label>
            Senha

            <input
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              placeholder="Digite sua senha"
            />
          </label>

          {error && (
            <p className="form-error">
              {error}
            </p>
          )}

          <Button type="submit">
            Entrar
          </Button>

        </form>

        <p className="auth-footer">
          Não possui conta?{" "}
          <Link to="/cadastro">
            Cadastre-se aqui
          </Link>
        </p>

      </div>

    </section>
  );
}

export default Login;