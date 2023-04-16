//создаем функцию
function NumberArray(num) {
    var newArray = [];
    for (var i = 0; i <= num; i++) {
      newArray.push(i);
    }
    return newArray;
  }
 // проверяем
  const numArray = NumberArray(7);
console.log(numArray); 
