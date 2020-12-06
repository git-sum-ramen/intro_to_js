

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
  for (var i = numbers.length - 1; i >= 0;i--) {
    console.log(i);
    result.push(numbers[i]);
  }
  return result;
}

// console.log(descending([1, 3, 5, 7]));



function sumCombinations(numbers1, numbers2) {
  var result = [];
  numbers1.forEach(function(number1) {
    numbers2.forEach(function(number2) {
      result.push(number1 + number2);
    });
  });
  return result;
}

console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));
