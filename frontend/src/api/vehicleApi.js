const API_URL = "http://localhost:3000/api/veiculos";

export async function getVehicles() {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Erro ao buscar veículos");
  }

  return response.json();
}

export async function getVehicle(id) {
  const response = await fetch(`${API_URL}/${id}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar veículo");
  }

  return response.json();
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
    throw new Error("Erro ao cadastrar veículo");
  }

  return response.json();
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
    throw new Error("Erro ao atualizar veículo");
  }

  return response.json();
}

export async function deleteVehicle(id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir veículo");
  }

  return response.json();
}  

export async function markVehicleAsSold(id, vehicle) {
  return updateVehicle(id, {
    ...vehicle,
    status: "Vendido",
  });
}