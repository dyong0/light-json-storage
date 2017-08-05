var express = require('express');

const projectRouter = express.Router();

projectRouter.get('/', (req, res) => {
    res.send('projects');
});

module.exports = projectRouter;