// Napisati program koji racuna faktorijel nekog broja n. N broj uzeti proizvoljno, izracunati faktorijel zatim ispisati rezultat.
// Faktorijel broja se racuna na sljedeci nacin: faktorijel = n * (n-1) * (n-2) * ... * 1.

const N = 5;
let factorial = 1;

for (let i = N; i >= 1; i--) {
  factorial *= i;
}

console.log(factorial);
