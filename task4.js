function numerStringArray(num, str) {
    const stringArray = [];
    for (let i = 0; i < num; i++) {
      stringArray.push(str);
    }
    return stringArray;
  }
//   пример
  const dogArray = numerStringArray(7, "dog");
console.log(dogArray); // ["dog", "dog", "dog"]
