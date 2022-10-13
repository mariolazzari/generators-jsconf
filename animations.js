function* anim() {
  while (true) {
    yield Date.now();
  }
}

let t = anim();

let end = 0;
while (true) {
  console.log(t.next());

  end++;
  if (end === 50) {
    return;
  }
}
