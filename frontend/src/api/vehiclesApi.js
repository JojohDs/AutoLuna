const API_URL = "http://localhost:3000/veiculos";

export async function getVehicles() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar veículos.");
  }

  return await response.json();
}

export async function createVehicle(vehicle) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehicle),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.erro || "Erro ao cadastrar veículo.");
  }

  return await response.json();
}

export async function updateVehicle(id, vehicle) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(vehicle),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.erro || "Erro ao atualizar veículo.");
  }

  return await response.json();
}

export async function deleteVehicle(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.erro || "Erro ao excluir veículo.");
  }

  return await response.json();
}

export async function markVehicleAsSold(id, vehicle) {
  return await updateVehicle(id, {
    quilometragem: vehicle.quilometragem,
    preco: vehicle.preco,
    cor: vehicle.cor,
    combustivel: vehicle.combustivel,
    status: "Vendido",
  });
}