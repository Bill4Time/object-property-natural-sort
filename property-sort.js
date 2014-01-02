

module.exports = function (path) {
    var naturalSort = require("javascript-natural-sort"),
        deep = require("deep-access");

    naturalSort.insensitive = true;

    return function (a, b) {
        return naturalSort(deep(a, path), deep(b, path));
    };
};