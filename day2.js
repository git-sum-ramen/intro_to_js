

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

// console.log(sumCombinations([1, 5, 10], [100, 500, 1000]));



// PART 2


// 8. Write a function that takes in an array of numbers and returns a count of how many zeros are in the array.

function countOfZeroes(numbers) {
  // console.log(numbers);
  var count = 0;
  numbers.forEach(function(number) {
    if (number === 0) {
      count++;
    }
  })
  return count;
}

// console.log(countOfZeroes([0,13,6,2,2,5,2,0,12,4,0,123,0]));

// 9. Write a function that takes in an array of numbers and returns true if all the numbers are bigger than 10, otherwise returns false.

function allGreaterThanTen(numbers) {
  var greaterThanTen = true;
  numbers.forEach(function(number) {
    if (number <= 10) {
      greaterThanTen = false;
    }
    // if the number > 10, keep going
    // if it's not, then return false
  })
  return greaterThanTen;
}

// console.log(allGreaterThanTen([12,14,16,18]));
// console.log(allGreaterThanTen([6, 12,14,16,18, 16]));

// 10. Write a function that takes in an array of words and returns the number of times the letter “a” appeared in total.

function totalAs(words) {
  // console.log(words);
  var i = 0;
  var count = 0;
  while (i < words.length) {
    var j = 0;
    while (j < words[i].length) {
      var letter = words[i][j];
      // console.log(letter);
      if (letter === 'a') {
        count++;
      }
      j++;
    }
    // console.log(words[i]);
    i++;
  }
  return count
}

console.log(totalAs(["apple", "orange", "grapes", "pineapple"]));