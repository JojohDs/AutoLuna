CREATE DATABASE autoluna;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tipo VARCHAR(20) NOT NULL
);

CREATE TABLE veiculos (
    id SERIAL PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    ano INTEGER NOT NULL,
    quilometragem INTEGER NOT NULL,
    preco DECIMAL(12,2) NOT NULL,
    cor VARCHAR(30),
    combustivel VARCHAR(30) NOT NULL,
    cambio VARCHAR(30) NOT NULL,
    categoria VARCHAR(30) NOT NULL,
    descricao TEXT,
    imagem TEXT,

    status VARCHAR(20) NOT NULL DEFAULT 'Disponível',
);

CREATE TABLE interesses (
    id SERIAL PRIMARY KEY,
    usuario_id INTEGER NOT NULL,
    veiculo_id INTEGER NOT NULL,
    mensagem TEXT,
    data_interesse TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT fk_interesse_usuario
        FOREIGN KEY (usuario_id)
        REFERENCES usuarios(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_interesse_veiculo
        FOREIGN KEY (veiculo_id)
        REFERENCES veiculos(id)
        ON DELETE CASCADE
);