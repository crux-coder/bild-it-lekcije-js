// Napisati program koji kreira matricu 4X4, i popunjava ju nasumicnim brojevima od 1 do 20.
// Nakon kreiranja matrice, program sabira sve brojeve koje se nalaze na indexima cija suma je neparan broj. Primjer indexa: 0 i 1, 1 i 3 itd.

const matrix = [];
const ROWS = 4;
const COLUMNS = 4;

for (let i = 0; i < ROWS; i++) {
  matrix[i] = [];
  for (let j = 0; j < COLUMNS; j++) {
    matrix[i][j] = Math.floor(1 + Math.random() * 20);
  }
}
console.table(matrix);

let sum = 0;

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if ((i + j) % 2 != 0) sum += matrix[i][j];
  }
}

console.table(sum);
