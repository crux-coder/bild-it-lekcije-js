let car = 'Edison';

let action = `${car}, VOZI.`;
let light = 'Red';

if (light == 'Red') {
  action = `${car} ZAUSTAVI SE.`;
}

if (light == 'Green') {
  action = `${car} VOZI.`;
}

console.log(action);