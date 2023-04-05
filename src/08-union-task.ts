type Level = 'junior' | 'middle' | 'senior';

interface Developer {
  login: string,
  skills: string[],
  level: Level,
}

// create a function that change level of incoming developer
function gradeDeveloper(dev: Developer, lev: Level) {
  dev.level = lev;
}

let dev1: Developer = {
  login: 'dev1',
  skills: ['HTML', 'CSS', 'JS'],
  level: 'junior',
};

gradeDeveloper(dev1, 'middle');
console.log(dev1);