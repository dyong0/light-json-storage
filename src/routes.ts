import * as express from "express";
import * as winston from "winston";
import Project from "./lib/Project";
import * as projectHelpers from "./views/helpers/project";

const router = express.Router();

router.get("/", async (req, res, err) => {
    let projects = await Project.findProjects({});

    res.render("index", {
        projects: projects,
        helpers: {
            getProgressColor: projectHelpers.getProgressColor,
            getVersionColor: projectHelpers.getVersionColor
        }
    });
});

module.exports = router;