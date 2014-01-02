var naturalSort = require("javascript-natural-sort"),
    deep = require("deep-access");

module.exports = function (path) {
    return function (a, b) {
        return naturalSort(deep(a, path), deep(b, path));
    };
};