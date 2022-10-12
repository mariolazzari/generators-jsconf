// iterators: next() => { value, done }

// generator function
function* genFunction() {
  yield "Hello world";
}

// generator object
const genObj = genFunction();
let value = genObj.next();
console.log(value);
value = genObj.next();
console.log(value);
value = genObj.next();
console.log(value);

function* loggeerator() {
  console.log("running...");
  yield "paused";

  console.log("running again...");
  return "stopped";
}

const logger = loggeerator();
value = logger.next();
console.log(value);
value = logger.next();
console.log(value);

// generator are iterable
function* abcs() {
  yield "a";
  yield "b";
  yield "c";
}

for (const letter of abcs()) {
  console.log(letter.toUpperCase());
}
console.log([...abcs()]);
