let car = 'Edison';

let action = `${car} VOZI.`;
let light = 'Green';

if (light == 'Red') {
  action = `${car} ZAUSTAVI SE.`;
} else if (light == 'Orange') {
  action = `${car} USPORI.`;
} else {
  action = `${car} VOZI.`;
}

console.log(action);