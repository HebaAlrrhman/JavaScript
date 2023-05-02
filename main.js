//....Start function.....
//1. Function that makes each word in a string an element of an array.
function stringToArray(input) {
    let wordArray = input.split(" ");
    return wordArray;
  }
  let string = stringToArray("Orange Jordan");
  console.log(string);
  
  //2.Function that converts the first seven digits of a mobile phone number to a hidden form
  function mobileNumber(a) {
    const hiddenDigits = "*******";
    const visibleDigits = a.slice(-3);
    const b = hiddenDigits + visibleDigits;
    return b;
  }
  const number = mobileNumber("0776807777");
  console.log(number);
  
  //3 Function that converts an email address to a hidden form
  function emailAddres(x) {
    const a1 = x.slice(0, 5);
  
    const a2 = x.slice(14, 24);
    const c = a1 + a2;
    return c;
  }
  const email = emailAddres("orange_academy@orange.jo");
  console.log(email);
  
  //4.Function that turns the first letter of first word in a string to the upper case.
  
  
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  const input = capitalizeFirstLetter("coding academy by orange");
  
  console.log(input);
  //5. Function that turns the first letter of every word in a string to the upper case
  function UpperCase() {       
    var str = "coding academy by orange";
    var string = str.toUpperCase();
    console.log(string);
  }
  UpperCase();
  //6.Function that flips a number
  function flipNumber(num) {
      let strNum = num.toString();
      let reversedStrNum = strNum.split('').reverse().join('');
      return parseInt(reversedStrNum);
    }
  
  let num = flipNumber(92485 );
  console.log(num);
  //7.function that swaps the value of 2 variables in at least three ways.
  function swap(a, b) {
    // Method 1: Using a temporary variable
    let temp = a;
    a = b;
    b = temp;
    console.log(`Method 1: a=${a}, b=${b}`);
  
    // Method 2: Using arithmetic operations
    a = a + b;
    b = a - b;
    a = a - b;
    console.log(`Method 2: a=${a}, b=${b}`);
  
    // Method 3: Using destructuring assignment
    [a, b] = [b, a];
    console.log(`Method 3: a=${a}, b=${b}`);
  }
      let a = 3;
      let b = 4;
      swap(a, b);
      //8.function that removes an indexed character from a string.
      function removeChar(str, index) {
        if (index < 0 || index >= str.length) {
         
          return str;
        }
        return str.slice(0, index) + str.slice(index + 1);
      }
      
      let str = "Orange";
      let index = 3;
      let newStr = removeChar(str, index);
      console.log(newStr);
      //9.function that merges two strings after removing the first character of each one.
      function mergeStrings(str1, str2) {
       
        let newStr1 = str1.slice(1);
        let newStr2 = str2.slice(1);
       
        return newStr1 + newStr2;
      }
      let str1 = "lora";
      let str2 = "inge";
      let mergedStr = mergeStrings(str1, str2);
      console.log(mergedStr);
  
      //10. function that ensures a specific character appears in a string's first or last position.
      function InFirst(char, str) {
        
        if (str[0] === char) {
          return true;
        }
       
        if (str[str.length - 1] === char) {
          return true;
        }
        
        return false;
      }
      
      let char = "o";
      let strr = "orange";
      let isCharInPos = InFirst(char, strr);
      console.log(isCharInPos);
      
  
      //10. function that ensures a specific character appears in a string's first or last position.
      
      function CharIn(char, str) {
       
        if (str[0] === char) {
          return true;
        }
      
        if (str[str.length - 1] === char) {
          return true;
        }
        return false;
      }
      
      let char1 = "z";
      let strr1 = "orange";
      let is = CharIn(char1, strr1);
      console.log(is);
  
      //11. function that takes a string and returns every word in the string as an array element
      function stringToArray(str) {
        
        let words = str.split(" ");
        return words;
      }
      let stri = "Coding Academy by Orange";
      let arr = stringToArray(stri);
      console.log(arr);
      //12. function that takes a string and reorders the characters alphabetically

      function String(str) {
        let chars = str.split("");
        let sortedChars = chars.sort();
        let sortedStr = sortedChars.join("");
        return sortedStr;
      }
      let st = String("Orange");
      console.log(st);
      // ....End function.......
     //Start Conditional.......
      //1. 
    let age =prompt("your Age..?");
    if (age > 60) {
     console.log("You may join the seniors' program.");
   } else if (age > 30) {
     console.log("You are not eligible. You may join other programs.");
   } else if (age >= 18) {
     console.log("You are eligible. Start your application.");
   } else {
     console.log("You may join the kids' program.");
   }
     
 //2.a function that takes a string and switches the letters' case from upper to lower and vice 

 function switchCase(stt) {
   let result = '';
   for (let i = 0; i < stt.length; i++) {
     let char = stt[i];
     if (char === char.toUpperCase()) {
       result += char.toLowerCase();
     } else {
       result += char.toUpperCase();
     }
   }
   return result;
 }
 
 let stt = "OrAnGe";
 console.log(switchCase(stt)); 
  
 
 //3.a function that takes a string, capitalizes each word's first letter, and removes all spaces
 function camelCase(ss) {
   let words = ss.split(' ');
   let result = '';
   for (let i = 0; i < words.length; i++) {
     let word = words[i];
     result += word.charAt(0).toUpperCase() + word.slice(1);
   }
   return result;
 }
 let ss = "Coding Academy by Orange";
 console.log(camelCase(ss)); 
 //4.a function that removes a specific element in an array
 function removeElement(arrr, element) {
   return arrr.filter(item => item !== element);
 }
 let arrr = ["Coding", "Academy", "By", "Orange"];
 let element = "By";
 console.log(removeElement(arrr, element)); 
 
 //5.a function that checks if a number is odd or even.
 function isEven(number) {
   if(number % 2 === 0) {
     return true; 
   } else {
     return false; 
   }
 }
 console.log(isEven(4)); 
 console.log(isEven(7)); 
 
 
 //6.function that checks whether an input variable is a number
 
 function isNumber(input) {
   return typeof input === 'number' && !isNaN(input);
 }
 console.log(isNumber(5)); 
 console.log(isNumber('5')); 
 console.log(isNumber(NaN)); 
 
 //7.a function that finds the largest of two numbers.
 function Largest(a, b) {
   if (a > b) {
     return a;
   } else {
     return b;
   }
 }
 console.log(Largest(5, 10)); 
 console.log(Largest(8, 2)); 
 
 
 //8. function that checks if a triangle is equilateral, scalene, or isosceles.
 function check(a, b, c) {
   if (a === b && b === c) {
     return "equilateral";
   } else if (a !== b && b !== c && a !== c) {
     return "scalene";
   } else {
     return "isosceles";
   }
 }
 console.log(check(5, 5, 5)); 
 console.log(check(3, 4, 5)); 
 console.log(check(5, 5, 8)); 
 
 //9.function that finds if a number is present in a given range.
 function Range(num, min, max) {
   return (num >= min && num <= max);
 }
 
 if (Range(7, 5, 10)) {
   console.log("The number 7 is in the range [5, 10].");
 } else {
   console.log("The number 7 is not in the range [5, 10].");
 }
 
 //10.a function that checks whether a year is a leap year.
 function LeapYear(year) {
   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
 
     return true ;
   
   } else {
   return false;
     
   
   }
 }
 LeapYear();

      ///.........LOOP.............
//1.script to print out all even numbers between 1 and 50, twice.

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      console.log(i);
      console.log(i);
    }
  }
  //While Loop
  let i = 1;
  while (i <= 50) {
    if (i % 2 === 0) {
      console.log(i);
    }
    i++;
  }
  //3.one loop prints out even numbers and the second prints out the odd 
  
  for(let i = 2; i <= 50; i += 2) {
    console.log(i);
  }
  
  
  let j = 1;
  while(j <= 50) {
    console.log(j);
    j += 2;
  }
  
  //4.Fizz-Buzz! 
  function fizzBuzz(num) {
    for (let i=1; i<101;i++){
        if (i % 3 ===0 && i % 5 ===0 ){
           console.log("FizzBuzz");
        } else if(i % 3=== 0){
            console.log("Fizz");
        } else if(i % 5 === 0){
            console.log("Buzz");
        } else{
            console.log(i);
        }
    }
  }
  fizzBuzz();
  //5.Rewrite the script with a function so that each iteration will trigger a function call.

  function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
      return "FizzBuzz";
    } else if (num % 3 === 0) {
      return "Fizz";
    } else if (num % 5 === 0) {
      return "Buzz";
    } else {
      return num.toString();
    }
  }
  
  console.log(fizzBuzz(1));
  console.log(fizzBuzz(15));
  
  
//6.FizzBuzz function calls itself to continue the series.
function fizzBuzzCall(num) {
    if (num <= 100) {
      if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
      } else if (num % 3 === 0) {
        console.log("Fizz");
      } else if (num % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(num);
      }
      fizzBuzzCall(num + 1);
    }
  }
  
  fizzBuzzCall(1);
  //8.
function countChar(str, char) {
 
    str = str.toLowerCase();
    char = char.toLowerCase();
    
    let count = 0;
    
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    
    return count;
  }
  
  
  console.log(countChar("Coding Academy by Orange", "o")); 
  
  //9.
  for (let i = 0; i <= 20; i++) {
    console.log(i);
  }
  
  for (let i = 3; i <= 29; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
  for (let i = 12; i >= -14; i--) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
      console.log(i);
    }
  }
  
  //10.
  
  const s1 = 'CodingAcademy';
  const a1 = [7, 500, 'KH404', 'black', 36];
  
  //Print each element of the array to a new line.
  
  for (let i = 0; i < a1.length; i++) {
    console.log(a1[i]);
  }
  
  //Print each string character in reverse order to a new line
  for (let i = s1.length - 1; i >= 0; i--) {
    console.log(s1[i]);
  }
  //11.Construct a for loop that sorts the array
const arra = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
const evens = [];
const odds = [];

for (let i = 0; i < arra.length; i++) {
  const num = arra[i];
  if (num % 2 === 0) {
    evens.push(num);
  } else {
    odds.push(num);
  }
}

console.log("Original array: ", arra);
console.log("Even numbers: ", evens);
console.log("Odd numbers: ", odds);
  


