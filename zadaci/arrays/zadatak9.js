// Napisati program koji simulira bacanje 3 kockice (jedna kockica ima 6 strana i na tim stranama su brojevi 1 - 6).
// Simulirati konstantno bacanje sve tri kockice dok se u dva uzastopna bacanja ne desi da se dobiju isti brojevi na sve tri kockice
// (npr. u sestom bacanju se dobiju brojevi 2, 2, 2 a u sedmom 4,4,4 na sve tri kockice).
// Ispisati koliko je ukupno bilo bacanja dok se nije ispunio navedeni uslov.

let lastThrowSameDieValue = false;
let counter = 0;

while (true) {
  counter++;
  const die1 = Math.floor(1 + Math.random() * 6);
  const die2 = Math.floor(1 + Math.random() * 6);
  const die3 = Math.floor(1 + Math.random() * 6);
  const currentThrowSameDieValues = die1 === die2 && die2 === die3;
  console.log(die1, die2, die3);

  if (currentThrowSameDieValues && lastThrowSameDieValue) break;
  lastThrowSameDieValue = currentThrowSameDieValues;
}

console.log(counter);
