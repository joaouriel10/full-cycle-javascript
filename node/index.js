const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const port = 3000;
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

async function initializeDatabase() {
    let connection;
    try {
        connection = await mysql.createConnection(config);
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS people (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL
            );
        `;
        await connection.execute(createTableQuery);
    } catch (error) {
        console.error('Erro:', error);
    }
}

initializeDatabase();

app.get('/', async (req, res) => {
    let connection;
    try {
        connection = await mysql.createConnection(config);

        const insertQuery = `INSERT INTO people(name) VALUES('Joao')`;
        await connection.execute(insertQuery);

        const [rows] = await connection.execute('SELECT name FROM people');

        let html = '<h1>Full Cycle Rocks!</h1><ul>';
        rows.forEach(row => {
            html += `<li>${row.name}</li>`;
        });
        html += '</ul>';

        res.send(html);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    } finally {
        if (connection) {
            await connection.end();
        }
    }
});

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
});
