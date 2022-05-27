// Napisati program koji pretvara konvertibilne marke (KM) u Euro.
// Kolicinu u konvertibilnim markama spremiti u varijablu, a zatim izracunati vrijednost u eurima i ispisati poruku.
// Primjer ispisa programa: '70 KM je 35.89 eura.'
// Uzmimo da je 1 Euro = 1.95KM

const KM = 70;

const eur = KM / 1.95;

console.log(`${KM} KM je ${eur} eura.`);
