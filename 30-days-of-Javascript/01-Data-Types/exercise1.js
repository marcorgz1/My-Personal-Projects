// Exercise: Level 1

// 1. Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// 2. Print the string on the browser console using console.log()
// 3. Print the length of the string on the browser console using console.log()
// 4. Change all the string characters to capital letters using toUpperCase() method
// 5. Change all the string characters to lowercase letters using toLowerCase() method
// 6. Cut (slice) out the first word of the string using substr() or substring() method
// 7. Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
// 8. Check if the string contains a word Script using includes() method
// 9. Split the string into an array using split() method
//     Split the string 30 Days Of JavaScript at the space using split() method
//     'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
//     Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
//     What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
//     What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
//     Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
//     Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
//     Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
//     Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
//     Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
//     Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
//     Use startsWith() method with the string 30 Days Of JavaScript and make the result true
//     Use endsWith() method with the string 30 Days Of JavaScript and make the result true
//     Use match() method to find all the a’s in 30 Days Of JavaScript
//     Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
//     Use repeat() method to print 30 Days Of JavaScript 2 times

const challenge = '30 Days Of JavaScript';

console.log('Text: ' + challenge);
console.log('Text length: ' + challenge.length);
console.log('Text with uppercase: ' + challenge.toUpperCase());
console.log('Text with lowercase: ' + challenge.toLowerCase());
console.log('Text with lowercase: ' + challenge.toLowerCase());
console.log('First word from the text: ' + challenge.substring(0, 7));
console.log(challenge.substring(3));
console.log(challenge.includes("Script"));
console.log('Text to array: ' + challenge.split(''));
