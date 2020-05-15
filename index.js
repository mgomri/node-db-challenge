const express = require('express');
const server = express();
server.use(express.json());
const projectRouter = require('./projects/project-router');
const taskRouter = require('./tasks/task-router');
const resourceRouter = require('./resources/resource-router');
const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
    res.send('<h2>Sprint Challenge Node-db</h2>')
})

server.use('/projects', projectRouter);
server.use('/tasks', taskRouter);
server.use('/resources', resourceRouter);



server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });
