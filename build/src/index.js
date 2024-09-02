"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomeStuff = doSomeStuff;
const map_1 = require("./map");
const filter_1 = require("./filter");
console.log('Try npm run lint/fix!');
const longString = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';
const trailing = 'Semicolon';
const why = { am: 'I tabbed?' };
const iWish = "I didn't have a trailing space...";
const sicilian = true;
const vizzini = sicilian ? !sicilian : sicilian;
const re = /foo {3}bar/;
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
const numbers = [2, 4, 6, 8];
const words = ['Charm', 'Sling', 'Juna', 'Terrapin', 'Bags', 'Amoeba', 'Reaper', 'Nomad', 'Echo', 'Partrige', 'Bambi', 'Management'];
console.log((0, map_1.sqaureNumber)(numbers));
console.log((0, filter_1.moreThanFive)(words));
//# sourceMappingURL=index.js.map