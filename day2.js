

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
















// function factorial(number) {
//   var result = 1;
//   for (var i = 0; i < number; i++) {
//     // console.log(i + 1)
//     result = result * (i + 1);    
//   }
//   return result;
// }

// console.log(factorial(5));



function descending(numbers) {
  var result = [];
  var index = numbers.length - 1;
  for (var i = 0; i < numbers.length; i++) {
    console.log(i);
    result.push(numbers[index]);
    index--;
  }
  return result;
}

console.log(descending([1, 3, 5, 7]));