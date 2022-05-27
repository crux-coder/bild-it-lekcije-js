// Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima od 1 do 100.
// Zatim, program kreira novi niz, koji ima sve elemente kao i prvi niz ali obrnut redoslijed.
// Ako je prvi niz [12, 24, 7], drugi niz ce biti [7, 24, 12].

const array = [];

for (let i = 0; i < 20; i++) {
  array[i] = Math.floor(1 + Math.random() * 99);
}

console.log(array);

const reversedArray = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArray.push(array[i]);
}

console.log(reversedArray);
