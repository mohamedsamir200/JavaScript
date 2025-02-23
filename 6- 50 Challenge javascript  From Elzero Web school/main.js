// ========> Go To( ReadMi.md )file to show All Assignments <========//

"=========================  1  ============================";
//#region ======>  1 <===========
// let fileName = "Elzero.php";

// console.log(fileName.split(".")[0]) // Elzero 
// console.log(fileName.split(".")[1]) // php

//#endregion
"=========================  2  ============================";
//#region ======>  2 <===========
// function addEl(str) {
//   return  str === "" || str.startsWith("El") ? str : `El${str}`
// }
// console.log(addEl("")); // ""
// console.log(addEl("Elzero")); // Elzero
// console.log(addEl("zero")); // Elzero
//#endregion
"=========================  3  ============================";
//#region ======>  3 <===========
// let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
// console.log(myString.split("@").slice(0, 2).join("@"));
// // Output Needed
// "Hello Elzero Web School @ We Love Programming";
//#endregion
"=========================  4  ============================";
//#region ======>  4 <===========
// function checkRange(n1, n2, n3, n4, n5) {
//     return [n1 , n2 , n3 ].every ( (num)=> num >= n4 && num <= n5 )
//     ? "Yes All Numbers In Range" : "Not All Numbers Is In Range"
//   }

//   console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
//   console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
//   console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range
//#endregion
"=========================  5  ============================";
//#region ======>  5 <===========
// function replaceFirstWithLast(word) {
//     let wordArr = word.split("");
//     [wordArr[0], wordArr[wordArr.length - 1]] = [wordArr[wordArr.length - 1], wordArr[0]];
//     return wordArr.join("");
// }

// console.log(replaceFirstWithLast("olzerE")); // Elzero
// console.log(replaceFirstWithLast("Hello")); // oelloH

//#endregion
"=========================  6 ============================";
//#region ======>  6 <===========
// function checkBiggestNum(word) {
//     let result = word.split("").reduce((acc, ele) => acc > ele ? +acc : +ele);
//     return result;
// }

// console.log(checkBiggestNum("1500654")); // 6
// console.log(checkBiggestNum("8509507")); // 9
//#endregion
"=========================  7  ============================";
//#region ======>  7 <===========
// solution 1
// let nums = [20, 100, 50, 10, 15, -20, 30];
//     let [, x, y, ,, ,] = nums
//     console.log([x , y])
"=================";
// Solution Two 
// let nums = [20, 100, 50, 10, 15, -20, 30];
// let result = nums.sort( (a , b)=> b - a ).slice(0 , 2)
// console.log(result)
// Needed Output
// [100, 50]
//#endregion
"=========================  8  ============================";
//#region ======>  8 <===========


// Closest Number Is 88
//#endregion
"=========================  9  ============================";
//#region ======>  9 <===========
// function swapEveryTwoChars(word) {
//     let result = word.split("")
//         .map((char, i) => i % 2 === 0 ?
//             (char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()) : char);

//     return result.join("");

// }

// console.log(swapEveryTwoChars("elZeRo")); // Elzero
// console.log(swapEveryTwoChars("heLlO")); // Hello
//#endregion

"=========================  10  ============================";
//#region ======>  10 <===========

// String.prototype.elzeroRepeat = function (count) {
//     return this.repeat(count);
// };

// console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero

//#endregion

"=========================  11  ============================";
//#region ======>  11 <===========
// let myMoney = 5301503206;
// let formattedMoney = myMoney.toLocaleString();
// console.log(formattedMoney);

// Needed Output 5,301,503,206
//#endregion
"=========================  12  ============================";
//#region ======>  12 <===========
// let names = ["Osso", "Aola", "Essa", "Igaa", "Daad", "Roor"];
// let result = [];

// for (let i = 0; i < names.length; i++) {
//     if (names[i][0].toLowerCase() === names[i][ names[i].length -1 ].toLowerCase()) {
//         result.push(names[i])
//     }

// }
// console.log(result); // ['Osso', 'Aola', 'Daad', 'Roor']
//#endregion
"=========================  13  ============================";
//#region ======>  13 <===========
// let theName = "Elzero";
// console.log(`${theName[0]}${ theName[theName.length - 1]}`) ; 
// console.log(theName.split("").slice(1 , 5).join("")) ; 
// console.log(theName.split("").slice(2 , 4).join("")) ; 

// Line 1 => Eo
// Line 2 => lzer
// Line 3 => ze
//#endregion
"=========================  14  ============================";
//#region ======>  14 <===========
// function repeatWithRules(word) {
//     let result = "" 
//     for (let i = 0 ; i < word.length ; i++) {
//         result += word[i].repeat( i + 1 )
//     }
//     return result
//   }

//   console.log(repeatWithRules("Elzero")); // Ellzzzeeeerrrrroooooo
//   console.log(repeatWithRules("Hello")); // Heelllllllooooo
//#endregion
"=========================  15  ============================";
//#region ======>  15 <===========
// function concatenateWithoutLast(words) {
//     // let result = "";
//     // for (let i = 0; i < words.length; i++) {
//     //     result += words[i].slice(0, words[i].length - 1).replace("", " ");
//     // }
//     // return result;
//     "=============== Other Solution ==============";
//     // return words.map ( (word) => word.slice ( 0 , -1) ).join(" ")
// }
// console.log(concatenateWithoutLast(["Elzeros", "Webd", "Schoold"])); // Elzero Web School

//#endregion
"=========================  16  ============================";
//#region ======>  16 <===========
// function getCharacters(word, nums) {
//     return word.slice( 0 , nums) + word.slice(-nums)
//   }

//   console.log(getCharacters("Elzero School", 2)); // Elol
//   console.log(getCharacters("Elzero School", 3)); // Elzool
//#endregion
"=========================  17  ============================";
//#region ======>  17 <===========
// function formatName(theName) {
//     return theName.split(" ").map((word) => word[0].toLowerCase()).join(".")
//         .replace(/[a-z]/, (match) => match.toUpperCase());
// }

// console.log(formatName("Osama Elzero")); // O.e
// console.log(formatName("Elzero Web School")); // E.w.s
//#endregion

"=========================  18  ============================";
//#region ======>  18 <===========
// let st = "elzero";

// console.log(st[0].toUpperCase() + st.slice(1));
// console.log(st.slice(0, 1).toUpperCase() + st.slice(1));
// console.log(st.charAt(0).toUpperCase() + st.slice(1));
// console.log(st.replace(/[a-z]/, match => match.toUpperCase()));
// console.log(st.replace(/^./, st[0].toUpperCase()));
// console.log(st.substring(0, 1).toUpperCase() + st.substring(1));
// console.log(st.split("").map( (char , index) => index === 0 ? char.toUpperCase() : char ).join("")) ; 
// Output Needed
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
// "Elzero"
//#endregion
"=========================  19  ============================";
//#region ======>  19 <===========
// let st = "Web SchoolElzero ";
// console.log(st.slice(-7) + st.slice(-17 , -13) + st.slice(-13 , -7))
// Needed Output
// "Elzero Web School";
//#endregion
"=========================  20  ============================";
//#region ======>  20 <===========
// let st = "Elzero";
// console.log(st.slice(-1));
// console.log(st.substring(5));
// console.log(st.charAt(5));
// console.log(st.split("")[5]);
// console.log(st.split("").filter((char, index) => index === 5 ? char : "").join(""));
// console.log(st.split("").reduce((acc, char, index) => index === 5 ? char : acc));
// console.log(st.match(/o/)[0]);
// Needed Output
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"
//#endregion;
"=========================  20  ============================";
//#region ======>  20 <===========
// let st = "Elzero";
// console.log(st.slice(-1));
// console.log(st.substring(5));
// console.log(st.charAt(5));
// console.log(st.split("")[5]);
// console.log(st.split("").filter((char, index) => index === 5 ? char : "").join(""));
// console.log(st.split("").reduce((acc, char, index) => index === 5 ? char : acc));
// console.log(st.match(/o/)[0]);
// Needed Output
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"
// "o"
//#endregion;
"=========================  21  ============================";
//#region ======>  21 <===========
// function getLastDigit(num) {
//     // return  num % 10
//     // OR 
//     // return + num.toString ().slice (-1)
//   }

//   console.log(getLastDigit(1)); // 1
//   console.log(getLastDigit(18)); // 8
//   console.log(getLastDigit(305)); // 5
//   console.log(getLastDigit(1569)); // 9
//   console.log(typeof getLastDigit(1569)); // Number
//#endregion;
"=========================  22  ============================";
//#region ======>  22 <===========
// let str1 = "AElzero";
// let str2 = "ZAcademy";

// console.log(str1.slice(1)+" "+str2.slice((1))); // Elzero Academy
//#endregion;
"=========================  23  ============================";
//#region ======>  23 <===========

// function reversing(str) {

//     return str.split(/\b/).map(word => 
//         /^[a-zA-Z]+$/.test(word) ? word.split("").reverse().join("") : word
//     ).join("");

// }
// console.log(reversing(",@Hello, E@lzero")); // ,@olleH, E@orezl
//#endregion;
"=========================  24  ============================";
//#region ======>  24 <===========
// function dashBetweenOdd(num) {
//     return num.toString()
//         .split("")
//         .map((num, index, arr) => num % 2 !== 0 && arr[index + 1] % 2 !== 0 ? num + "-" : num)
//         .join("");
// }
// console.log(dashBetweenOdd(150653127)); // 1-5065-3-127
// console.log(dashBetweenOdd(5314557922)); // 5-3-145-5-7-922
//#endregion;
"=========================  25  ============================";
//#region ======>  25 <===========
// let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// console.log(myArr = []) ;

// console.log(myArr.length = []) ;

// myArr.splice(0 ,  myArr.length)
// console.log(myArr)

// while (myArr.length > 0) {
//     myArr.pop();
// }
// console.log(myArr); 


// Output Needed
// []
//#endregion;
"=========================  26  ============================";
//#region ======>  26 <===========
// let myArr = [10, 10, 20, 20, 10, 30, 50, 20, 10];
// let uniqueArr = [];
// for (let i = 0; i < myArr.length; i++) {
//     if (!uniqueArr.includes(myArr[i])) {
//         uniqueArr.push (myArr[i])
//     }
// }
// console.log(uniqueArr);

// myArr.forEach((ele) => !uniqueArr.includes(ele) ? uniqueArr.push(ele) : "");
// console.log(uniqueArr);

// let uniqueArr = myArr.filter( (ele , index , arr) => arr.indexOf(ele) == index )
// console.log(uniqueArr)

// console.log([... new Set (myArr)])

// Output Needed
// [10, 20, 30, 50]
//#endregion;
"=========================  27  ============================";
//#region ======>  27 <===========
// let myArr = ["69", "108", "122", "101", "114", "111"];
// let result = String.fromCharCode(...myArr)
// console.log(result); // Elzero
//#endregion;
"=========================  28  ============================";
//#region ======>  28 <===========
// Write Your Function Here

// function customMerge(...numbers) {
//     let [x, y, z] = numbers;
//     let all = [...x, ...y, ...z];
//     let arr = all.sort((a, b) => a - b).map((nums) => +nums);
//     return arr;
// }

// console.log(customMerge([10, 20, "30", 1000], [100, "50", 20], [90, 20, "40", 10]));
// [10, 10, 20, 20, 20, 30, 40, 50, 90, 100, 1000]
//#endregion;
"=========================  29  ============================";
//#region ======>  29 <===========
// Write Your Function Here
// function customCalc(...nums) {
//     let filteredNums = nums.filter(num => parseInt(num));
//     let sum = filteredNums.reduce((acc, num) => acc + parseInt(num), 0);
//     return sum * parseInt(filteredNums[0]) * parseInt(filteredNums[filteredNums.length - 1]);
// }
// console.log(customCalc("10", 20, "A", "40", 15));
// // 12750 <= (10 + 20 + 40 + 15) * 10 * 15

// console.log(customCalc(5, "15", 10, 5, 10));
// // 2250 <= (5 + 15 + 10 + 5 + 10) * 5 * 10

// console.log(customCalc(30, 5, "C", 10));
// // 13500 <= (30 + 5 + 10) * 30 * 10

//#endregion;
"=========================  30  ============================";
//#region ======>  30 <===========
// for (let i = 1; i < 100; i += 5) {
//     if (i % 2 !== 0) {
//         console.log(i);
//     }
// }

// // Output Needed
// //   1
// //   11
// //   21
// //   31
// //   41
// //   51
// //   61
// //   71
// //   81
// //   91
//#endregion;
