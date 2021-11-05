const express = require('express');
const PORT = process.env.PORT || 3002;
const app = express();

const mysql = require('mysql2');

// Get all candidates
app.get('/api/candidates', (req, res) => {
    const sql = `SELECT * FROM candidates`;
  
    db.query(sql, (err, rows) => {
      if (err) {
        res.status(500).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: rows
      });
    });
  });
  
//conection to DB
const db = mysql.createConnection(
    {
        host:'localhost',
        //Your MySQL username,
        user: 'root',
        // Your MySQL password
        password:'password',
        database:'election'
    },
    console.log('Connected to the election database')
);

//middleware for express.js
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});