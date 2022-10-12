const cardDeck = {
  suits: ["♥️", "♦️", "♣️", "♠"],
  court: ["J", "Q", "K", "A"],

  // iterator
  [Symbol.iterator]: function* () {
    for (const suit of this.suits) {
      for (let i = 2; i <= 10; i++) {
        yield suit + i;
      }
      for (let c of this.court) {
        yield suit + c;
      }
    }
  },
};

console.log([...cardDeck]);
