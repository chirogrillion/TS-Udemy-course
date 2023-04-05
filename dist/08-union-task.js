"use strict";
// create a function that change level of incoming developer
function gradeDeveloper(dev, lev) {
    dev.level = lev;
}
let dev1 = {
    login: 'dev1',
    skills: ['HTML', 'CSS', 'JS'],
    level: 'junior',
};
gradeDeveloper(dev1, 'middle');
console.log(dev1);
