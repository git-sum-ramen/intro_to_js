

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
console.log(selectEvenItems(["a", "b", "c", "d", "e", "f"]));
