
function IsPalindrom (arr) {
  var array = arr.toString().split("");
  
  for ( var i = 0 ; i < array.length / 2; i ++) {
    
    if (array[i] !== array[array.length - i - 1]) {
        return false
    }
    }
    return true
  } 

     



console.log(IsPalindrom("1221"));




// function isTotallyDifferent(n, x) {
//     ​
//         var number = n + 1;
//         while (true) {
//     ​
//             if (isNumberTotallyDifferentFromX(number, x)) {
//                 return number;
//             }
//             number++;
//         }
//     }
//     ​
//     function isNumberTotallyDifferentFromX(number, x) {
//     ​
//         while (number > 0) {
//             var lastDigitNumber = number % 10;
//             if(doesDigitExistsInNumber(lastDigitNumber, x)){
//                 return false;
//             }
//     ​
//             number = Math.floor(number/10);
//         }
//         return true;
//     }
//     ​
//     function doesDigitExistsInNumber(digit, numberX) {
//     ​
//         while (numberX > 0) {
//             var lastDigitX = numberX % 10;
//             if (digit !== lastDigitX) {
//                 numberX = Math.floor(numberX/10);
//                 continue;
//             }
//             return true;
//         }
//         return false;
//     }
//     ​
//     console.log(isTotallyDifferent(100, 213));
