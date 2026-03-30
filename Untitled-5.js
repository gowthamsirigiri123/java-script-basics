//methods of strings

let str = "Hello World";
console.log(str.length);    
  // concatination of strings
let str1 = "Hello";
let str2 = "World";
let result = str1 + " " + str2;
console.log(result);    
//escaping characters
let str3 = "He said, \"Hello!\"";
console.log(str3);
    //breaking lines
let str4 = "This is line 1.\nThis is line 2.";
console.log(str4);
//substring
let str5 = "JavaScript is fun!";
let substring = str5.substring(0, 10);
console.log(substring);
//string to uppercase
let str6 = "hello world";
let upperCaseStr = str6.toUpperCase();
console.log(upperCaseStr);
//string to lowercase
let str7 = "HELLO WORLD";
let lowerCaseStr = str7.toLowerCase();
console.log(lowerCaseStr);
    //search for a substring
let str8 = "The quick brown fox jumps over the lazy dog.";
let searchTerm = "fox";
let index = str8.indexOf(searchTerm);
console.log(index); 
//includes method
let str9 = "The quick brown fox jumps over the lazy dog.";
let searchTerm2 = "cat";
let includesTerm = str9.includes(searchTerm2);
console.log(includesTerm);  
    //replace method
let str10 = "The quick brown fox jumps over the lazy dog.";
let newStr = str10.replace("fox", "cat");
console.log(newStr);    
//trim method
let str11 = "   Hello World!   ";
let trimmedStr = str11.trim();
console.log(trimmedStr);
//trim start and trim end
let str12 = "   Hello World!   ";
let trimmedStartStr = str12.trimStart();
console.log(trimmedStartStr);
let trimmedEndStr = str12.trimEnd();
console.log(trimmedEndStr); 
        //accessing characters
let str13 = "Hello World";
console.log(str13.charAt(0)); 
console.log(str13[1]);
//comparision of strings
let str14 = "Hello";    
let str15 = "hello";
console.log(str14 === str15);
console.log(str14.toLowerCase() === str15.toLowerCase());
//string objects
let str17 ="hello world";
let str16 = new String("Hello World");
console.log(str16);
console.log(str16.length);
console.log(typeof str16);
console.log(str17 === str16);
//slice method //it supports negative indexing
let str18 = "JavaScript is fun!";
let slicedStr = str18.slice(0, 10);
console.log(slicedStr +"  slice method");
//replace all
let str19 = "The quick brown fox jumps over the lazy dog. The dog was not happy.";
let newStr2 = str19.replaceAll("dog", "cat");
console.log(newStr2);
//CONCAT method
let str20 = "Hello";
let str21 = "World";
let result2 = str20.concat(' ', str21);
console.log(result2);

//pad method
let str22 = "5";
let paddedStr = str22.padStart(3, '5');
console.log(paddedStr);
let str23 = "5";
let paddedStr2 = str23.padEnd(3, '5');
console.log(paddedStr2);    
//charat method
let str24 = "Hello World";
//console.log(str24.charAt(0)); 
console.log(str24[1]);
//split method
let str25 = "Hello ,World";
let splitStr = str25.split(" ,");
console.log(splitStr);  
//charcode method
let str26 = "EMI DNG";
console.log(str26.charCodeAt(3));   

