

function selectEvenItems(strings) {
  var result = [];
  var index = 0;
  strings.forEach(function(string) {
    if (index % 2 === 0) {
      result.push(string)
    }
    index++;
  });
  return result;
}
// console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));
















function factorial(number) {
  var result = 1;
  var currentNumber = number;
  for (var i = 0; i < number; i++) {
    result = result * currentNumber;
    currentNumber--;
  }
  return result;
}

console.log(factorial(5));
