let car = 'Edison';

let action = `${car} goes BRRR.`;
let light = 'Red';

if (light == 'Green') {
  action = `${car} goes BRRR.`;
}

if (light == 'Red') {
  action = `${car} STOPS.`;
}

console.log(action);