//database.js
const Database = require('better-sqlite3');
const db = new Database('MDP_GA.db');

// Create Passenger table
const createPassengerTable = `
  CREATE TABLE IF NOT EXISTS Passengers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    phone INTEGER NOT NULL,
    email TEXT UNIQUE,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`;
db.exec(createPassengerTable);

// Functions for Passenger operations
const addPassenger = (firstName, lastName, phone, email, password) => {
  const stmt = db.prepare(`INSERT INTO Passengers (firstName, lastName, phone, email, password) VALUES (?, ?, ?, ?, ?)`);
  stmt.run(firstName, lastName, phone, email, password);
};

const getPassenger = (email) => {
  const stmt = db.prepare(`SELECT * FROM Passengers WHERE email = ?`);
  return stmt.get(email);
};


const getPassengerById = (id) => {
  const stmt = db.prepare(`SELECT * FROM Passengers WHERE id = ?`);
  return stmt.get(id);
};


const deletePassenger = (email) => {
  const stmt = db.prepare(`DELETE FROM Passengers WHERE email = ?`);
  stmt.run(email);
};

const updatePassenger = (firstName, lastName, phone, email) => {
  const updated_at = new Date().toISOString();
  const stmt = db.prepare(`UPDATE Passengers SET firstName = ?, lastName = ?, phone = ?, updated_at = ? WHERE email = ?`);
  stmt.run(firstName, lastName, phone, updated_at, email);
};

const displayAllPassengers = () => {
  const stmt = db.prepare('SELECT * FROM Passengers');
  const passengers = stmt.all();
  console.log('All Passengers:');
  console.table(passengers);
};
displayAllPassengers();

// Create Driver table
const createDriverTable = `
  CREATE TABLE IF NOT EXISTS Drivers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    phone INTEGER NOT NULL,
    car_id TEXT NOT NULL,
    email TEXT UNIQUE,
    likes INTEGER NOT NULL,
    comment TEXT NOT NULL,
    picture BLOB NOT NULL,
    image BLOB NOT NULL,
    location TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`;
db.exec(createDriverTable);

// Functions for Driver operations
const addDriver = (firstName, lastName, phone, car_id, email, password) => {
  const stmt = db.prepare(`INSERT INTO Drivers (firstName, lastName, phone, car_id, email, password) VALUES (?, ?, ?, ?, ?, ?)`);
  stmt.run(firstName, lastName, phone, car_id, email, password);
};

const getDriver = (email) => {
  const stmt = db.prepare(`SELECT * FROM Drivers WHERE email = ?`);
  return stmt.get(email);
};

const getAllDrivers = () => {
  const stmt = db.prepare(`SELECT * FROM Drivers`);
  return stmt.all();
};

const deleteDriver = (email) => {
  const stmt = db.prepare(`DELETE FROM Drivers WHERE email = ?`);
  stmt.run(email);
};


const updateDriver = (firstName, lastName, phone, car_id, comment, picture, image, location, email) => {
  const updated_at = new Date().toISOString();
  const stmt = db.prepare(`UPDATE Drivers SET firstName = ?, lastName = ?, phone = ?, car_id = ?, comment = ?, picture = ?, image = ?, location = ?, updated_at = ? WHERE email = ?`);
  stmt.run(firstName, lastName, phone, car_id, comment, picture, image, location, email, updated_at);
};

const displayAllDrivers = () => {
  const stmt = db.prepare('SELECT * FROM Drivers');
  const drivers = stmt.all();
  console.log('All Drivers:');
  console.table(drivers);
};
displayAllDrivers();

// Create React&Respond table
const createReactTable = `
  CREATE TABLE IF NOT EXISTS React (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    passenger_id INTEGER,
    passenger_comment TEXT NOT NULL,
    driver_id INTEGER,
    driver_comment TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (passenger_id) REFERENCES Passengers (id),
    FOREIGN KEY (driver_id) REFERENCES Drivers (id)
  )
`;
db.exec(createReactTable);

//Functions for react operations
const displayAllReactions = () => {
  const stmt = db.prepare('SELECT * FROM React');
  const reactions = stmt.all();
  console.log('All Reactions:');
  console.table(reactions);
};
displayAllReactions();

module.exports = { addPassenger, getPassenger, getPassengerById, deletePassenger, updatePassenger, addDriver, getDriver, deleteDriver, updateDriver, getAllDrivers };

// const updateDriver = (firstName, lastName, phone, car_id, email) => {
//   const updated_at = new Date().toISOString();
//   const stmt = db.prepare(`UPDATE Drivers SET firstName = ?, lastName = ?, phone = ?, car_id = ?, updated_at = ? WHERE email = ?`);
//   stmt.run(firstName, lastName, phone, car_id, updated_at, email);
// };
