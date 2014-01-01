var naturalSort = require("javascript-natural-sort"),
    deep = require("deep-access");

module.exports = function (path) {
    path = path.split(".");

    return function (a, b) {
        return naturalSort(deep(a, path), deep(b, path));
    };
};