import {sqaureNumber} from "./map";
import {moreThanFive} from "./filter";
import {printFruits} from "./forEach";
import {squaredNumbers} from "./map_nic";
import { messageSlice } from "./slice";

console.log('Try npm run lint/fix!');

const longString =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ut aliquet diam.';

const trailing = 'Semicolon';

const why = {am: 'I tabbed?'};

const iWish = "I didn't have a trailing space...";

const sicilian = true;

const vizzini = sicilian ? !sicilian : sicilian;

const re = /foo {3}bar/;

export function doSomeStuff(
  withThis: string,
  andThat: string,
  andThose: string[]
) {
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

const numbers = [2,4,6,8];
const words:string[] = ['Charm', 'Sling', 'Juna', 'Terrapin', 'Bags', 'Amoeba', 'Reaper', 'Nomad', 'Echo', 'Partrige', 'Bambi', 'Management'];
const fruits:string[] = ['apple', 'banana', 'grape', 'mango', 'watermelon', 'strawberry', 'pomegranate'];
const nums:number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const message = "And as he stares into the sky, there are twice as many stars as usual.";



console.log(sqaureNumber(numbers));
console.log(moreThanFive(words));
printFruits(fruits);
console.log(squaredNumbers(nums));
console.log(messageSlice(message));