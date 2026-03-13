CREATE TABLE IF NOT EXISTS Categories (
    id VARCHAR(40) PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS Products (
    id VARCHAR(40) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    image VARCHAR(500),
    stock INTEGER,
    description VARCHAR(255),
    price NUMERIC(6, 2),
    discount INTEGER,
    id_category VARCHAR(40) REFERENCES Categories(id)
);

CREATE TABLE IF NOT EXISTS Clients (
    id VARCHAR(40) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    phone VARCHAR(20) UNIQUE,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255) NOT NULL,
    street VARCHAR(100),
    building VARCHAR(20),
    appart VARCHAR(10),
    floor VARCHAR(10),
    entrance VARCHAR(10),
    intercom VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS Orders (
    id VARCHAR(40) PRIMARY KEY,
    date TIMESTAMP,
    totalPrice NUMERIC,
    discount NUMERIC,
    id_user VARCHAR(40) REFERENCES Clients(id),
    name VARCHAR(50),
    phone VARCHAR(20),
    details VARCHAR(200),
    payment VARCHAR(50)
);

CREATE TABLE IF NOT EXISTS Address (
    id_order VARCHAR(40) PRIMARY KEY REFERENCES Orders(id),
    street VARCHAR(100),
    building VARCHAR(20),
    appart VARCHAR(10),
    floor VARCHAR(10),
    entrance VARCHAR(10),
    intercom VARCHAR(20)
);

CREATE TABLE IF NOT EXISTS OrderProducts (
    id SERIAL PRIMARY KEY,
    id_order VARCHAR(40) REFERENCES Orders(id),
    id_product VARCHAR(40) REFERENCES Products(id),
    amount INTEGER,
    price NUMERIC
);

CREATE TABLE IF NOT EXISTS News (
    id VARCHAR(40) PRIMARY KEY,
    image VARCHAR(255),
    title VARCHAR(100)
);

