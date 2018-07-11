"use strict";
/* tslint:disable */
exports.__esModule = true;
var chalk_1 = require("chalk");
var _ = require("lodash");
var StringUtils_1 = require("./lib/StringUtils");
// Note: If using Webpack to perform build (if using tsc, they can remain import)
// these modules need to be loaded using `require` commonJS as they do not have typescript type files
var msg = require('cd-messenger');
var stringWidth = require('string-width');
var color = 'red';
color = 'blue';
console.log('width: ', stringWidth(color));
var str = new StringUtils_1["default"]();
var PAD_LENGTH = 15;
console.log(chalk_1["default"].magenta('Test using chalk using `tsc`'));
console.log(_.padEnd('Upper: ', PAD_LENGTH) + chalk_1["default"].blue(str.upper(color)));
console.log(_.padEnd('Lower: ', PAD_LENGTH) + chalk_1["default"].green(str.lower('MIKE')));
console.log(_.padEnd('Title: ', PAD_LENGTH) + chalk_1["default"].cyan(str.title('mike erickson')));
console.log(_.padEnd('Reverse: ', PAD_LENGTH) + chalk_1["default"].magenta(str.reverse('mike erickson')));
var warning = chalk_1["default"].yellow;
console.log(_.padEnd('Family: ', PAD_LENGTH) + warning(str.family(['Mike', 'Kira', 'Joelle', 'Brady', 'Bailey', 'Trevor'])));
var name = str.title('mike erickson');
console.log();
msg.success("cd messenger success " + name);
msg.error("cd messenger error " + name);
msg.warning("cd messenger warning " + name);
msg.info("cd messenger info " + name);
msg.note("cd messenger note " + name);
var family = [
    ['First Name', 'Last Name', 'Role', 'Age'],
    { fname: 'Mike', lname: 'Erickson', role: 'Father', age: 51 },
    { fname: 'Kira', lname: 'Erickson', role: 'Mother', age: 41 },
    { fname: 'Joelle', lname: 'Asoau', role: 'Daughter', age: 25 },
    { fname: 'Nate', lname: 'Asoau', role: 'Son', age: 24 },
    { fname: 'Brady', lname: 'Erickson', role: 'Son', age: 23 },
    { fname: 'Bailey', lname: 'Arnold', role: 'Daughter', age: 22 },
    { fname: 'Trevor', lname: 'Erickson', role: 'Son', age: 21 },
    { fname: 'Alaya', lname: 'Asoau', role: 'Granddaughter', age: 4 },
    { fname: 'Aseria', lname: 'Asoau', role: 'Granddaughter', age: 2 },
    { fname: 'Nathaniel', lname: 'Asoau', role: 'Grandson', age: 1 },
    { fname: '?Coming Soon!', lname: 'Asoau', role: 'Granddaughter', age: 0 },
    { fname: 'Gunner', lname: 'Erickson', role: 'Dog', age: 7 },
    { fname: 'Honu', lname: 'Erickson', role: 'Dog', age: 9 },
];
msg.table(family);
