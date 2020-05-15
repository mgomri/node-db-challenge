const express = require('express');
const server = express();
server.use(express.json());

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.send('<h2>Sprint Challenge Node-db</h2>')
})


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
