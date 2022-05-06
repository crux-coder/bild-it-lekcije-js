// Napisati program koji uklanja sve samoglasnike iz stringa ‘Make it work, make it right, make it fast.’.
// Nakon sto program ukloni sve samoglasnike ispisati rezultirajuci string u konzolu.

const string = 'Make it work, make it right, make it fast.';
let resultString = '';

for (let i = 0; i < string.length; i++) {
  if (
    string[i].toLowerCase() != 'a' &&
    string[i].toLowerCase() != 'e' &&
    string[i].toLowerCase() != 'i' &&
    string[i].toLowerCase() != 'o' &&
    string[i].toLowerCase() != 'u'
  )
    resultString += string[i];
}

console.log(string);
console.log(resultString);
