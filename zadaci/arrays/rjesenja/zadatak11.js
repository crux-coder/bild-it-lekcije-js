// Napisati program koji kreira matricu 4X4, i popunjava ju nasumicnim brojevima od 1 do 20.

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
