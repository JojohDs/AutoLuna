import { createContext, useContext, useState } from "react";

const VehicleContext = createContext();

const initialVehicles = [
  {
    id: 1,
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022,
    quilometragem: 45000,
    preco: 125000,
    cor: "Preto",
    combustivel: "Flex",
    cambio: "Automático",
    categoria: "Sedan",
    status: "Disponível",
    image: "/assets/corolla.jpg",
  },
  {
    id: 2,
    marca: "Honda",
    modelo: "Civic",
    ano: 2021,
    quilometragem: 38000,
    preco: 118000,
    cor: "Cinza",
    combustivel: "Flex",
    cambio: "Automático",
    categoria: "Sedan",
    status: "Disponível",
    image: "/assets/honda.jpg",
  },
  {
    id: 3,
    marca: "Jeep",
    modelo: "Compass",
    ano: 2022,
    quilometragem: 35000,
    preco: 145000,
    cor: "Prata",
    combustivel: "Flex",
    cambio: "Automático",
    categoria: "SUV",
    status: "Vendido",
    image: "/assets/jeep.jpg",
  },
  {
    id: 4,
    marca: "Volkswagen",
    modelo: "T-Cross Highline",
    ano: 2024,
    quilometragem: 15000,
    preco: 142000,
    cor: "Vermelho",
    combustivel: "Flex",
    cambio: "Automático",
    categoria: "SUV",
    status: "Disponível",
    image: "/assets/volk.jpg",
  },
];

export function VehicleProvider({ children }) {
  const [vehicles, setVehicles] = useState(initialVehicles);

  function addVehicle(vehicle) {
    const newVehicle = {
      ...vehicle,
      id: Date.now(),
      ano: Number(vehicle.ano),
      quilometragem: Number(vehicle.quilometragem),
      preco: Number(vehicle.preco),
      status: "Disponível",
      image: vehicle.imagem || vehicle.image || "",
    };

    setVehicles((current) => [...current, newVehicle]);
  }

  function deleteVehicle(id) {
    setVehicles((current) =>
      current.filter((vehicle) => vehicle.id !== id)
    );
  }

  function markAsSold(id) {
    setVehicles((current) =>
      current.map((vehicle) =>
        vehicle.id === id
          ? { ...vehicle, status: "Vendido" }
          : vehicle
      )
    );
  }

  function updateVehicle(id, data) {
    setVehicles((current) =>
      current.map((vehicle) =>
        vehicle.id === id
          ? { ...vehicle, ...data }
          : vehicle
      )
    );
  }

  return (
    <VehicleContext.Provider
      value={{
        vehicles,
        addVehicle,
        deleteVehicle,
        markAsSold,
        updateVehicle,
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
}

export function useVehicles() {
  return useContext(VehicleContext);
}