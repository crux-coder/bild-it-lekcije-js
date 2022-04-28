const lockers = [];
const NUM_OF_STUDENTS = 1000;

for (let i = 0; i < 1000; i++) {
  lockers[i] = true;
}

for (let i = 1; i <= NUM_OF_STUDENTS; i++) {
  for (let j = 0; j < lockers.length; j += i) {
    const element = lockers[j];
    if (element) {
      lockers[j] = false;
    } else {
      lockers[j] = true;
    }
  }
}

console.log(lockers.filter((el) => !el).length);