import { owner } from "../configs";
import * as winston from "winston";
import * as https from "https";

type ProjectSchema = {
    name: string,
    url: string,
    progress: string,
    version: string,
    repositoryName: string,
    githubId: string,
    description: string
};

const projects: ProjectSchema[] = [
    {
        name: "Passthrough",
        url: "/projects/passthrough",
        progress: "idea",
        version: "0.0",
        repositoryName: "passthrough",
        githubId: owner.githubId,
        description: "Passthrough is an API gateway, which can be configured by restful APIs. Of course, it’s scalable and supports UI for API providers and their clients."
    },
    {
        name: "Light JSON Storage",
        url: "/projects/light-json-storage",
        progress: "idea",
        version: "0.0",
        repositoryName: "light-json-storage",
        githubId: owner.githubId,
        description: "This project is for storing JSON data via restful APIs such as CRUD. Users can create data scheme and store their data programmatically. Since the storage resource is limited, authorization is required."
    },
    {
        name: "Planner CLI",
        url: "/projects/planner-cli",
        progress: "alpha",
        version: "0.5",
        repositoryName: "planner-cli",
        githubId: owner.githubId,
        description: "Planner is a task management tool in CLI. It supports basic operations such as adding, listing, searching and deleting tasks. In addition, it features fuzzy search and commenting to track tasks. You can install it through NPM."
    },
    {
        name: "Red-Green TDD for Git",
        url: "/projects/red-green-tdd",
        progress: "idea",
        version: "0.0",
        repositoryName: "red-green-tdd",
        githubId: owner.githubId,
        description: "This project introduces Red-Green cycle, the shorten version of Red-Green-Refactor cycle of TDD discipline. It also advices you on managing your commits in this discipline."
    },
];

export default class Project {
    static async findProjects(conditions): Promise<ProjectSchema[]> {
        return Promise.resolve(projects);
    }
}