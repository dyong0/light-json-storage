"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var configs_1 = require("../configs");
var projects = [
    {
        name: "Passthrough",
        url: "/projects/passthrough",
        progress: "idea",
        version: "0.0",
        repositoryName: "passthrough",
        githubId: configs_1.owner.githubId,
        description: "Passthrough is an API gateway, which can be configured by restful APIs. Of course, it’s scalable and supports UI for API providers and their clients."
    },
    {
        name: "Light JSON Storage",
        url: "/projects/light-json-storage",
        progress: "idea",
        version: "0.0",
        repositoryName: "light-json-storage",
        githubId: configs_1.owner.githubId,
        description: "This project is for storing JSON data via restful APIs such as CRUD. Users can create data scheme and store their data programmatically. Since the storage resource is limited, authorization is required."
    },
    {
        name: "Planner CLI",
        url: "/projects/planner-cli",
        progress: "alpha",
        version: "0.5",
        repositoryName: "planner-cli",
        githubId: configs_1.owner.githubId,
        description: "Planner is a task management tool in CLI. It supports basic operations such as adding, listing, searching and deleting tasks. In addition, it features fuzzy search and commenting to track tasks. You can install it through NPM."
    },
    {
        name: "Red-Green TDD for Git",
        url: "/projects/red-green-tdd",
        progress: "idea",
        version: "0.0",
        repositoryName: "red-green-tdd",
        githubId: configs_1.owner.githubId,
        description: "This project introduces Red-Green cycle, the shorten version of Red-Green-Refactor cycle of TDD discipline. It also advices you on managing your commits in this discipline."
    },
];
var Project = (function () {
    function Project() {
    }
    Project.findProjects = function (conditions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, Promise.resolve(projects)];
            });
        });
    };
    return Project;
}());
exports["default"] = Project;
