var env = require('node-env-file');
var express = require('express');
var exphbs = require('express-handlebars');
var path = require('path');
var winston = require('winston');

// load environments
env(__dirname + '/env.common');
env(__dirname + '/env.' + process.env.ENV.toLowerCase());

const app = express();

// routes
app.use('/', require('./routes'));

// middlewares
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use((err, req, res, next) => {
    winston.err(err.stack);
    next(err);
});

// view settings
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', exphbs({ // note that engine name must be same as extname
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views/layouts'),
    partialsDir: path.join(__dirname, 'views/partials')
  }));
app.set('view engine', 'hbs');
if(process.env.ENV === 'production') {
    app.enable('view cache');
}

// execute server
app.listen(process.env.PORT, () => {
    winston.info('Listening on ' + process.env.PORT);
});