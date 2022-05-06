// Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima u rasponu od 1 do 100.
// Nakon kreiranja niza ispisati isti u konzolu.

const array = [];

for (let i = 0; i < 20; i++) {
  array[i] = Math.floor(1 + Math.random() * 99);
}

console.log(array);
