"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moreThanFive = void 0;
var moreThanFive = function (words) { return words.filter(function (word) {
    return word.length > 5;
}); };
exports.moreThanFive = moreThanFive;
