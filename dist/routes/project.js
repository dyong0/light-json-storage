var express = require('express');
var projectRouter = express.Router();
projectRouter.get('/', function (req, res) {
    res.send('projects');
});
module.exports = projectRouter;
