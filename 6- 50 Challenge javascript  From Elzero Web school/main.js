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

//#endregion
"=========================  17  ============================";
//#region ======>  17 <===========

//#endregion
"=========================  18  ============================";
//#region ======>  18 <===========

//#endregion
"=========================  19  ============================";
//#region ======>  19 <===========

//#endregion
"=========================  20  ============================";
//#region ======>  20 <===========

//#endregion;
