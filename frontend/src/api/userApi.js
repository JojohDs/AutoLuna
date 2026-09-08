const API_URL = "http://localhost:3000/user";

export async function createUser(user) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.erro || "Erro ao cadastrar usuário."
    );
  }

  return await response.json();
}

export async function getUserByEmail(email) {
  const response = await fetch(
    `${API_URL}/email/${encodeURIComponent(email)}`
  );

  if (!response.ok) {
    const error = await response.json();

    throw new Error(
      error.erro || "Usuário não encontrado."
    );
  }

  return await response.json();
}