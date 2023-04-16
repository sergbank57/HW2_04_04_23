//создаем функцию которая будет находит общие элементы двух массивов
function findElements(arr1, arr2) {
    let Elements = [];
  
    for (let i = 0; i < arr1.length; i++) {
      if (arr2.includes(arr1[i]) && !Elements.includes(arr1[i])) {
        Elements.push(arr1[i]);
      }
    }
  
    return Elements;
  }
  
  // Пример использования
  const array1 = [1, 2, 3, ];
  const array2 = [4, 2, 1,];
  
  const common = findElements(array1, array2);
  console.log(common); 
  