// Napisati program koji ce kreirati niz od 20 elemenata, popunjen nasumicnim brojevima u rasponu od 1 do 100.
// Ispisati ovaj pocetni niz u konzolu. Zatim izmjesati elemente u nizu, te ponovo ispisati niz u konzolu.
// Za mijesanje niza, minimalan broj iteracija je jednak duzini niza.

const array = [];

for (let i = 0; i < 20; i++) {
  array[i] = Math.floor(1 + Math.random() * 99);
}

console.log(array);

for (let i = 0; i < array.length; i++) {
  const randomIndex = Math.floor(Math.random() * array.length);
  const temp = array[i];
  array[i] = array[randomIndex];
  array[randomIndex] = temp;
}

console.log(array);
