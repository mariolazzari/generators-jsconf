function* infinityAndBeyond() {
  let i = 1;

  while (true) {
    yield i++;
  }
}

let value = infinityAndBeyond();
console.log(value.next());
console.log(value.next());
console.log(value.next());
console.log(value.next());

function* take(n, items) {
  for (const item of items) {
    if (n <= 0) {
      return;
    }
    n--;
    yield item;
  }
}

let taken = [...take(5, infinityAndBeyond())];
console.log(taken);
