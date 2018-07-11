"use strict";
exports.__esModule = true;
var chalk_1 = require("chalk");
var Test = /** @class */ (function () {
    function Test() {
        console.log(chalk_1["default"].red('Test'));
    }
    Test.prototype.upper = function (str) {
        return str.toUpperCase();
    };
    Test.prototype.lower = function (str) {
        return str.toLowerCase();
    };
    Test.prototype.title = function (str) {
        return this.titleCase(str);
    };
    Test.prototype.titleCase = function (str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    };
    return Test;
}());
exports["default"] = Test;
