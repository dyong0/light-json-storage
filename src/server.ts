import * as env from "node-env-file";
import * as express from "express";
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

// execute server
app.listen(process.env.PORT, () => {
    winston.info("Listening on " + process.env.PORT);
});