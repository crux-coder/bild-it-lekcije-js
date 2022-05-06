// Napisati program koji ce generisati Fibonacci niz i smjestiti ga u jedan niz od 20 elemenata.
// (Fibbonacijev niz je niz brojeva koji pocinje brojevima 0 i 1,
// a svaki sljedeci broj u nizu dobija se zbrajanjem prethodna dva: F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)).
// Zatim napraviti funkciju koja ce u nizu pronaci sve brojeve koji zavrsavanju parnom cifrom i ukloniti ih iz niza.
// Uklanjanje elemenata niza obavezno uraditi tako da ne ostaju prazni elementi vec da se ostatak niza pomjeri kako ne bi bilo praznih elemenata.
// Pomjeranje ostatka niza obavezno raditi prilikom uklanjanja elemenata.

const fibonacciSequence = [0, 1];

for (let i = 2; i < 20; i++) {
  fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
}

console.log(fibonacciSequence);

for (let i = 0; i < fibonacciSequence.length; i++) {
  const numbersLastDigit = fibonacciSequence[i] % 10;
  if (numbersLastDigit % 2 == 0) {
    for (let j = i; j < fibonacciSequence.length - 1; j++) {
      fibonacciSequence[j] = fibonacciSequence[j + 1];
    }
    fibonacciSequence.pop();
  }
}

console.log(fibonacciSequence);
