// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    cats.push(name);
  }

  function destructivelyPrependCat(name) {
    cats.unshift(name);
  }

  function destructivelyRemoveLastCat(name) {
    cats.pop(name);
  }

  function destructivelyRemoveFirstCat(name) {
    cats.shift(name);
  }

  function appendCat(name) {
    const catsPlusCat = [...cats, name];
    return catsPlusCat
  } 

  function prependCat(name) {
    const catPlusCats = [name, ...cats];
    return catPlusCats
  } 

  function removeLastCat() {
    const noLastCat = cats.slice(0, -1);
    return noLastCat
  } 

  function removeFirstCat() {
    const noFirstCat = cats.slice(1);
    return noFirstCat
  } 