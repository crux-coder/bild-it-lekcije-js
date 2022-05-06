// Napisati program koji racuna BMI (Body Mass Index).
// BMI se racuna po formuli: BMI = tezina /(visina * visina), gdje je tezina u kilogramima a visina u metrima. Tezinu i visinu spremiti u varijable.
// Na osnovu izracunate vrijednosti ispisati odgovarajucu poruku iz ove tabele:
//     | BMI vrijednost    | Kategorija    |
//     | ----------------- | ------------- |
//     | BMI < 18.5        | Pothranjenost |
//     | 18.5 ≤ BMI < 25.0 | Normalan BMI  |
//     | 25.0 ≤ BMI < 30.0 | Gojaznost     |
//     | BMI >= 30.0       | Pretilost     |

// Primjer ispisa programa: 'Za visinu od 1.75m i tezinu od 70kg vas BMI je 22.9. To spada u kategoriju: Normalan BMI'

const tezina = 70;
const visina = 1.75;

const BMI = tezina / (visina * visina);
let kategorija = '';

if (BMI < 18.5) {
  kategorija = 'Pothranjenost';
} else if (BMI >= 18.5 && BMI < 25) {
  kategorija = 'Normalan BMI';
} else if (BMI >= 25 && BMI < 30) {
  kategorija = 'Gojaznost';
} else if (BMI >= 30) {
  kategorija = 'Pretilost';
}

console.log(
  `Za visinu od ${visina}m i tezinu od ${tezina}kg vas BMI je ${BMI}. To spada u kategoriju: ${kategorija}`
);
