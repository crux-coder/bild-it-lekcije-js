// Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima u rasponu od 1 do 100.
// Nakon kreiranja niza, sabrati sve elemente koji se nalaze na parnom indexu, i ispisati sumu u konzolu.

const array = [];

for (let i = 0; i < 20; i++) {
  array[i] = Math.floor(1 + Math.random() * 99);
}

console.log(array);

let sum = 0;

for (let i = 0; i < array.length; i++) {
  if (i % 2 == 0) sum += array[i];
}

console.log(sum);
