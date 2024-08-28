"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomeStuff = doSomeStuff;
var map_1 = require("./map");
console.log('Try npm run lint/fix!');
var longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
var trailing = 'Semicolon';
var why = { am: 'I tabbed?' };
var iWish = "I didn't have a trailing space...";
var sicilian = true;
var vizzini = sicilian ? !sicilian : sicilian;
var re = /foo {3}bar/;
function doSomeStuff(withThis, andThat, andThose) {
    //function on one line
    if (!andThose.length) {
        return false;
    }
    console.log(withThis);
    console.log(andThat);
    console.dir(andThose);
    console.log(longString, trailing, why, iWish, vizzini, re);
    return;
}
// TODO: more examples
var numbers = [2, 4, 6, 8];
console.log((0, map_1.sqaureNumber)(numbers));
