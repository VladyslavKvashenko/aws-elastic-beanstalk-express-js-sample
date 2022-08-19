const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Simple CI/CD project with AWS! With New stage now'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
