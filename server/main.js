const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));

const port = 3000;
//conductores
app.get('/conductores', (req, res) => {
  res.send('API is working');
})

app.post('/conductores',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO conductores(nombre, apellido, placa, celular, ciudad, password) VALUES ('${body.nombre}', '${body.apellido}','${body.placa}','${body.celular}','${body.ciudad}','${body.password}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
//usuarios
app.get('/usuario', (req, res) => {
  res.send('API is working');
})

app.post('/usuario',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO usuarios(nombre, apellido, correo_electronico, celular, ciudad, password) VALUES ('${body.nombre}', '${body.apellido}','${body.correo_electronico}','${body.celular}','${body.ciudad}','${body.password}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
//administradores
app.get('/administradores', (req, res) => {
  res.send('API is working');
})

app.post('/administradores',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO administradores(nombre, apellido, correo_electronico, celular, ciudad, password, rol, area) VALUES ('${body.nombre}', '${body.apellido}','${body.correo_electronico}','${body.celular}','${body.ciudad}','${body.password}','${body.rol}','${body.area}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
//region
app.get('/region', (req, res) => {
  res.send('API is working');
})

app.post('/region',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO region(ciudad, pais) VALUES ('${body.ciudad}', '${body.pais}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
//vehiculos
app.get('/vehiculos', (req, res) => {
  res.send('API is working');
})

app.post('/vehiculos',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO vehiculos(placa, marca, modelo, capacidad, color) VALUES ('${body.placa}', '${body.marca}','${body.modelo}','${body.capacidad}','${body.color}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

//trayecto
app.get('/trayecto', (req, res) => {
  res.send('API is working');
})

app.post('/trayecto',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO trayecto(id_origen, id_destino, fecha, hora, tiempo_estimado, precio) VALUES ('${body.id_origen}', '${body.id_destino}','${body.fecha}','${body.hora}','${body.tiempo_estimado}','${body.precio}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
//direcciones
app.get('/direcciones', (req, res) => {
  res.send('API is working');
})

app.post('/direcciones',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO direcciones(direccion, ciudad) VALUES ('${body.direccion}', '${body.ciudad}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})
//carrera
app.get('/carrera', (req, res) => {
  res.send('API is working');
})

app.post('/carrera',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO carrera(id_trayecto, conductor, pasajero) VALUES ('${body.id_trayecto}', '${body.conductor}', '${body.pasajero}');`;
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.listen(port, () => {
  console.log(`The Project Is Running On: ${port}`)
})

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'db1'
})

connection.connect(()  => console.log('Conected To DataBase ...'));