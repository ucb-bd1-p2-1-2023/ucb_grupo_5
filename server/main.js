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

app.get('/', (req, res) => {
  res.send('API is working');
})

app.post('/driver',(req, res) => {
  const body = req.body;
<<<<<<< HEAD
  const query = `INSERT INTO user(firstName, lastName, email, telefono) VALUES ('${body.firstName}', '${body.lastName}','${body.email}','${body.email}');`;
  connection.connect();
=======
  const query = `INSERT INTO user(firstName, lastName, email) VALUES ('${body.firstName}', '${body.lastName}','${body.email}');`;
>>>>>>> 1d9642e03878b105e900e2e7632dfc3abbe64059
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  res.send('1 record inserted');
})

app.listen(port, () => {
  console.log(`Project sample is running on: ${port}`)
})

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'root',
  database: 'db1'
})

<<<<<<< HEAD
=======
connection.connect();
>>>>>>> 1d9642e03878b105e900e2e7632dfc3abbe64059
