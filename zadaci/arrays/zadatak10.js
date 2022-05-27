// Napisati program koji ce generisati neki prirodni broj A (A > 100000), te kreirati i ispisati broj B koji će se sastojati od cifara broja A u
// obrnutom redoslijedu u kojem je svaka parna cifra uklonjena. (npr. ako se generise 45362792 program ce vratiti 9735).
// Ispisati brojeve A i B i razliku tih brojeva.

const numA = Math.floor(100000 + Math.random() * 899999);
let numACopy = numA;
let numB = 0;

while (numACopy != 0) {
  numALastDigit = numACopy % 10;
  numACopy = Math.floor(numACopy / 10);
  if (numALastDigit % 2 != 0) {
    numB *= 10;
    numB += numALastDigit;
  }
}
console.log('A = ', numA);
console.log('B = ', numB);
console.log('Razlika', numA - numB);
