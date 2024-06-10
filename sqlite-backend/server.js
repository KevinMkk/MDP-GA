//server.js
const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const { addPassenger, getPassenger, getPassengerById, deletePassenger, updatePassenger, addDriver, getDriver, deleteDriver, updateDriver, getAllDrivers } = require('./database');

const app = express();
app.use(bodyParser.json());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/addPassenger', (req, res) => {
  const { firstName, lastName, phone, email, password } = req.body;
  try {
    addPassenger(firstName, lastName, phone, email, password);
    res.status(201).send('Passenger added successfully');
  } catch (error) {
    res.status(500).send('Error adding passenger');
  }
});

app.get('/getPassenger', (req, res) => {
  const { email } = req.query;
  try {
    const passenger = getPassenger(email);
    if (passenger) {
      res.status(200).json(passenger);
    } else {
      res.status(404).send('Passenger not found');
    }
  } catch (error) {
    res.status(500).send('Error retrieving passenger');
  }
});

app.delete('/deletePassenger', (req, res) => {
  const { email } = req.body;
  try {
    deletePassenger(email);
    res.status(200).send('Passenger deleted successfully');
  } catch (error) {
    res.status(500).send('Error deleting passenger');
  }
});

app.put('/updatePassenger', (req, res) => {
  const { firstName, lastName, phone, email, updated_at } = req.body;
  try {
    updatePassenger(firstName, lastName, phone, email, updated_at);
    res.status(200).send('Passenger updated successfully');
  } catch (error) {
    console.error('Error updating passenger:', error);
    res.status(500).send('Error updating passenger');
  }
});

app.post('/loginPassenger', (req, res) => {
  const { email, password } = req.body;
  try {
    const passenger = getPassenger(email);
    if (passenger && passenger.password === password) {
      res.status(200).json(passenger);
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (error) {
    res.status(500).send('Error logging in passenger');
  }
});

app.post('/addDriver', (req, res) => {
  const { firstName, lastName, phone, car_id, email, password } = req.body;
  try {
    addDriver(firstName, lastName, phone, car_id, email, password);
    res.status(201).send('Driver added successfully');
  } catch (error) {
    console.error('Error adding driver:', error);
    res.status(500).send('Error adding driver');
  }
});

app.get('/getDriver', (req, res) => {
  const { email } = req.query;
  try {
    const driver = getDriver(email);
    if (driver) {
      res.status(200).json(driver);
    } else {
      res.status(404).send('Driver not found');
    }
  } catch (error) {
    console.error('Error retrieving driver:', error);
    res.status(500).send('Error retrieving driver');
  }
});

app.delete('/deleteDriver', (req, res) => {
  const { email } = req.body;
  console.log('Delete request received for email:', email);
  try {
    deleteDriver(email);
    res.status(200).send('Driver deleted successfully');
  } catch (error) {
    console.error('Error deleting driver:', error);
    res.status(500).send('Error deleting driver');
  }
});



app.put('/updateDriver', upload.fields([{ name: 'picture' }, { name: 'image' }]), (req, res) => {
  const { firstName, lastName, phone, car_id, comment, location, email } = req.body;
  const picture = req.files['picture'] ? req.files['picture'][0].buffer : null;
  const image = req.files['image'] ? req.files['image'][0].buffer : null;

  try {
    updateDriver(firstName, lastName, phone, car_id, comment, picture, image, location, email);
    res.status(200).send('Driver updated successfully');
  } catch (error) {
    console.error('Error updating driver:', error);
    res.status(500).send('Error updating driver');
  }
});

app.post('/loginDriver', (req, res) => {
  const { email, password } = req.body;
  try {
    const driver = getDriver(email);
    if (driver && driver.password === password) {
      res.status(200).json(driver);
    } else {
      res.status(401).send('Invalid email or password');
    }
  } catch (error) {
    res.status(500).send('Error logging in driver');
  }
});

app.get('/getIDPassenger', (req, res) => {
  const { id } = req.query;
  try {
    const passenger = getPassengerById(id);
    if (passenger) {
      res.status(200).json(passenger);
    } else {
      res.status(404).send('Passenger not found');
    }
  } catch (error) {
    res.status(500).send('Error retrieving passenger');
  }
});

app.get('/drivers', (res) => {
  try {
    const drivers = getAllDrivers();
    res.status(200).json(drivers);
  } catch (error) {
    console.error('Error retrieving passengers:', error);
    res.status(500).send('Error retrieving passengers');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.put('/updateDriver', (req, res) => {
//   const { firstName, lastName, phone, car_id, email, updated_at } = req.body;
//   try {
//     updateDriver(firstName, lastName, phone, car_id, email, updated_at);
//     res.status(200).send('Driver updated successfully');
//   } catch (error) {
//     console.error('Error updating driver:', error);
//     res.status(500).send('Error updating driver');
//   }
// });