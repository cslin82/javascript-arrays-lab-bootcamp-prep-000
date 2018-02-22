const app = "I don't do much."



function destructivelyAppendKitten(name) {
  kittens = kittens.push(name);
}

function destructivelyPrependKitten(name) {
  kittens = kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  kittens = kittens.pop();
  
}

function destructivelyRemoveFirstKitten() {
  kittens = kittens.shift();
}

function appendKitten(name) {
  kittens.push(name);
}

function prependKitten(name) {
  kittens.unshift(name);
}

function removeLastKitten() {
  kittens.pop();
}

function removeFirstKitten() {
  kittens.shift();
}

