import { createContext, useContext, useEffect, useState } from "react";

import {
  getVehicles,
  createVehicle,
  updateVehicle,
  deleteVehicle as deleteVehicleApi,
} from "../api/vehicleApi";

const VehicleContext = createContext();

export function VehicleProvider({ children }) {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadVehicles() {
      try {
        const data = await getVehicles();
        setVehicles(data);
      } catch (error) {
        console.error("Erro ao carregar veículos:", error);
      } finally {
        setLoading(false);
      }
    }

    loadVehicles();
  }, []);

  async function addVehicle(vehicle) {
    const newVehicle = await createVehicle({
      ...vehicle,
      ano: Number(vehicle.ano),
      quilometragem: Number(vehicle.quilometragem),
      preco: Number(vehicle.preco),
    });

    setVehicles((current) => [...current, newVehicle]);

    return newVehicle;
  }

  async function deleteVehicle(id) {
    await deleteVehicleApi(id);

    setVehicles((current) =>
      current.filter((vehicle) => vehicle.id !== id)
    );
  }

  async function updateVehicleContext(id, data) {
    const updatedVehicle = await updateVehicle(id, data);

    setVehicles((current) =>
      current.map((vehicle) =>
        vehicle.id === id ? updatedVehicle : vehicle
      )
    );

    return updatedVehicle;
  }

  async function markAsSold(id) {
    const vehicle = vehicles.find((vehicle) => vehicle.id === id);

    if (!vehicle) {
      throw new Error("Veículo não encontrado.");
    }

    return await updateVehicleContext(id, {
      quilometragem: vehicle.quilometragem,
      preco: vehicle.preco,
      cor: vehicle.cor,
      combustivel: vehicle.combustivel,
      status: "Vendido",
    });
  }

  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        loading,
        addVehicle,
        deleteVehicle,
        markAsSold,
        updateVehicle: updateVehicleContext,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicles() {
  return useContext(VehicleContext);
}