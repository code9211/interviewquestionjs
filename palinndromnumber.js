let input = "civic";
// console.log(input.split('').reverse().toString()===input)


function isPalindrome(num) {
    const str = String(num);
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  function findHighestPalindrome() {
    let highestPalindrome = 0;
    
    for (let i = 1000; i <= 2000; i++) {
      for (let j = 1000; j <= 2000; j++) {
        const product = i * j;
        
        if (isPalindrome(product) && product > highestPalindrome) {
          highestPalindrome = product;
        }
      }
    }
    
    return highestPalindrome;
  }
  
//   const highestPalindrome = findHighestPalindrome();
//   console.log(highestPalindrome);
  
// console.log(Number.isInteger('343.343'));