const defaultVehicles = [
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
    image: "public/assets/corolla.jpg",
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
    image: "public/assets/honda.jpg",
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
    image: "public/assets/jeep.jpg",
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
    image: "public/assets/volk.jpg",
    status: "Disponível",
  },
];

const STORAGE_KEY = "autoluna_veiculos";

export function getVehicles() {
  const savedVehicles = localStorage.getItem(STORAGE_KEY);

  if (savedVehicles) {
    return JSON.parse(savedVehicles);
  }

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(defaultVehicles)
  );

  return defaultVehicles;
}

export function saveVehicles(vehicles) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(vehicles)
  );
}

export function addVehicle(vehicle) {
  const vehicles = getVehicles();

  const newVehicle = {
    ...vehicle,
    id: Date.now(),
  };

  const updatedVehicles = [...vehicles, newVehicle];

  saveVehicles(updatedVehicles);

  return newVehicle;
}