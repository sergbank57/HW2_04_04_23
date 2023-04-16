function isPalindrome(word) {
    const reversed = word.split('').reverse().join('');
    return word === reversed;
  }
  //пример
  console.log(isPalindrome('росол')); 
console.log(isPalindrome('ABBA')); 
