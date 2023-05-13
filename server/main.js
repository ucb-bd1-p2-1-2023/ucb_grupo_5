import express from 'express';
import { createConnection } from 'mysql';
import { json } from 'body-parser';
import cors from 'cors';
const app = express();
app.use(json());

app.use(cors({
  origin: '*'
}));

const port = 3000;


app.get('/', (req, res) => {
  res.send('API is working');
})

app.post('/driver',(req, res) => {
  const body = req.body;
  const query = `INSERT INTO user(firstName, lastName, email) VALUES ('${body.firstName}', '${body.lastName}','${body.email}','${body.telefono}');`;
  connection.connect();
  connection.query( query, (err, rows, fields) => {
    if (err) throw err
    console.log('1 record inserted');
  })
  connection.end();
  res.send('1 record inserted');
})

app.listen(port, () => {
  console.log(`Project sample is running on: ${port}`)
})

const connection = createConnection({
  host: 'localhost',
  port: '3307',
  user: 'root',
  password: 'root',
  database: 'db1',
})