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

app.post('/user',(req, res) => {
  const body = req.body;
  console.log(body);
  const query = `INSERT INTO user(firstname, lastname, email) VALUES ('${body.firstname}', '${body.lastname}','${body.email}');`;
  
  connection.query( query, (err) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  //connection.end();
  res.send('1 record inserted');
})

app.listen(port, () => {
  console.log(`Project sample is running on: ${port}`)
})

const connection = mysql.createConnection({
  host: 'localhost',
  port: '3307',
  user: 'root',
  password: 'root',
  database: 'db1'
})

connection.connect(()  => console.log('connected to  db'));