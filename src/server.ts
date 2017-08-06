import * as env from "node-env-file";
import * as express from "express";
import * as exphbs from "express-handlebars";
import * as path from "path";
import * as winston from "winston";
import * as compression from "compression";

// load environments
env(__dirname + "/env.common");
env(__dirname + "/env." + process.env.ENV.toLowerCase());

const app = express();

// pre-middlewares
app.use(compression());

// routes
app.use("/", require("./routes"));

// post-middlewares
app.use("/static", express.static(path.join(__dirname, "public")));
app.use((err, req, res, next) => {
    next(err);
});

// view settings
app.set("views", path.join(__dirname, "views"));
app.engine("hbs", exphbs({ // note that engine name must be same as extname
    extname: ".hbs",
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layouts"),
    partialsDir: path.join(__dirname, "views/partials")
  }));
app.set("view engine", "hbs");
if(process.env.ENV === "production") {
    app.enable("view cache");
}

// execute server
app.listen(process.env.PORT, () => {
    winston.info("Listening on " + process.env.PORT);
});