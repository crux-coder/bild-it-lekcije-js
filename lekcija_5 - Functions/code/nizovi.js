const niz1 = [];
const niz2 = [];
const niz3 = [];

for (let i = 0; i < 10; i++) {
  niz1[i] = Math.floor(1 + Math.random() * 9);
}

for (let i = 0; i < 15; i++) {
  niz2[i] = Math.floor(10 + Math.random() * 90);
}

for (let i = 0; i < 20; i++) {
  niz3[i] = Math.floor(100 + Math.random() * 900);
}

let suma1 = 0;
let suma2 = 0;
let suma3 = 0;

for (let i = 0; i < niz1.length; i++) {
  suma1 += niz1[i];
}

for (let i = 0; i < niz2.length; i++) {
  suma2 += niz2[i];
}

for (let i = 0; i < niz3.length; i++) {
  suma3 += niz3[i];
}

console.log('Prosjek brojeva niza 1 je', suma1/niz1.length);
console.log('Prosjek brojeva niza 2 je', suma2/niz2.length);
console.log('Prosjek brojeva niza 3 je', suma3/niz3.length);