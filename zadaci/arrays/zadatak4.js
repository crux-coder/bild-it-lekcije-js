// Napisati program koji simulira dijeljenje 6 karata korisniku iz spila. Spil ukupno ima 52 karte,
//  'A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K' u cetiri znaka 'List','Srce', 'Kocka' i 'Mak'.
//  Ispisati sve podjeljene karte.

const cardValue = [
  'A',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
];
const cardSuits = ['List', 'Srce', 'Kocka', 'Mak'];
const deck = [];
const NUM_OF_DEALT_CARDS = 6;
const dealtCards = [];

for (let i = 0; i < cardValue.length; i++) {
  for (let j = 0; j < cardSuits.length; j++) {
    deck.push(`${cardValue[i]}-${cardSuits[j]}`);
  }
}

// shuffle the deck
for (let i = 0; i < deck.length; i++) {
  const randomIndex = Math.floor(Math.random() * deck.length);
  const temp = deck[i];
  deck[i] = deck[randomIndex];
  deck[randomIndex] = temp;
}

for (let i = 0; i < NUM_OF_DEALT_CARDS; i++) {
  const randomCardIndex = Math.floor(Math.random() * deck.length);
  dealtCards.push(deck.splice(randomCardIndex, 1)[0]);
}

console.log(dealtCards);
