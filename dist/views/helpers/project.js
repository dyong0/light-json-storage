"use strict";
exports.__esModule = true;
var hotpink = "ff69b4";
exports.getProgressColor = function (progress) {
    switch (progress) {
        case "idea": return "lightgray";
        case "alpha": return "yellow";
        case "beta": return "blue";
        case "stable": return hotpink;
        default: return "lightgray";
    }
};
exports.getVersionColor = function (version) {
    if (version >= 1.0) {
        return hotpink;
    }
    if (version >= 0.5) {
        return "yellow";
    }
    return "lightgray";
};
