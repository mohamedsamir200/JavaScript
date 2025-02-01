// ===========================  Problem solving [ Beginner ]  ============================== //

//#region // 1- Write a program that allow to user enter number then print it

// let userNumber = Number(window.prompt("Enter Your Number"));
// console.log(userNumber);

//#endregion

//*********************************************************************/

//#region // 2 - Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// let userNumber = Number(window.prompt("Enter Your Number")); 
// if (userNumber % 3 == 0 && userNumber % 4 == 0 ) {
//     console.log("Yes")
// } else {
//     console.log("Wrong Number")
// }

//#endregion

//*********************************************************************/

//#region 3- Write a program that allows the user to insert 2 integers then print the max
// let num1 = parseInt (Number (window.prompt("Enter First Number"))) ; 
// let num2 = parseInt(Number (window.prompt("Enter Second Number"))) ; 

// if (num1 > num2) {
//     console.log(`${num1} Is The Largest`)
// } else {
//     console.log(`${num2} Is The Largest`)
// }

// console.log(Math.max(num1 , num2))


//#endregion

//*********************************************************************/

//#region 4 - - Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// let checkNumber = parseInt(Number(window.prompt("Enter Your Number"))) ; 
//  if (checkNumber > 0  ) {
//     console.log("This Number Is Positive ") ; 
//  } else {
//     console.log("This Number Is negative ") ; 
//  }

//#endregion

//*********************************************************************/

//#region 5- Write a program that take 3 integers from user then print the max element and the min element

//   let num1 = parseInt (Number (window.prompt("Enter First Number"))) ; 
//   let num2 = parseInt(Number (window.prompt("Enter Second Number"))) ; 
//   let num3 = parseInt(Number (window.prompt("Enter Third Number"))) ;

// Find Max Element
// if (num1 > num2 && num1 > num3) {
//     console.log(`Max Element = ${num1}`)
// } else if (num2 > num1 && num2 > num3) {
//     console.log(`Max Element = ${num2}`)
// } else if (num3 > num1 && num3 > num2) {
//     console.log(`Max Element = ${num3}`)
// }
// // Find Min Element
// if (num1 < num2 && num1 < num3) {
//     console.log(`Min Element = ${num1}`)
// } else if (num2 < num1 && num2 < num3) {
//     console.log(`Min Element = ${num2}`)
// } else if (num3 < num1 && num3 < num2) {
//     console.log(`Min Element = ${num3}`)
// }


//   console.log(`Max Element =  ${Math.max(num1 , num2, num3)}`) ; 
//   console.log(`Min Element =  ${Math.min(num1 , num2, num3)}`) ; 


//#endregion

//*********************************************************************/

//#region 6- Write a program that allows the user to insert integer number then check If a number is even or odd
// let checkNumber = parseInt(window.prompt("Enter Your Number"));
// if (checkNumber % 2 == 0) {
//     console.log("even number")
// } else {
//     console.log("odd number")
// }
//#endregion

//*********************************************************************/

//#region 7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

//  let char  = window.prompt("Enter Your Character") ; 
// let vowel = ["a" , "e" , "i" , "o" , "u"] ; 
// if (vowel.includes( char.toLowerCase() )) {
//     console.log("Vowel")
// } else {
//     console.log("constant")
// }
//#endregion

//*********************************************************************/

//#region 8 - Write a program that allow suser to insert integer then print all numbers between 1 to that’s number
//  let number = parseInt(window.prompt("Enter Your Number")) ; 
//  for (let i = 0; i <= number ; i++) {
//    console.log(i)
//  }

//#endregion

//*********************************************************************/

//#region 10- Write a program that allows user to insert integer then print a multiplication table up to 12.
// let number = parseInt(window.prompt("Enter Your Number")) ; 
// for (let i = 1; i <= 12; i++) {
//     console.log(number * i )
// }

//#endregion

//*********************************************************************/

//#region 11- Write a program that allows to user to insert number then print all even number between 1 to this number
// let number = parseInt(window.prompt("Enter Your Number")) ;  
// for (let i = 1; i <= number; i++) {
//     if (i % 2 == 0) {
//         console.log(i)
//     }

// }
//#endregion

//*********************************************************************/

//#region 12-Write a program that take two integers then print the power

// output = 2*2*2*2
//  let num1 = parseInt(window.prompt("Enter Number 1")) ; // 2
//  let num2 = parseInt(window.prompt("Enter Number 2")) ; // 4  

// let result = 1 ;
//  for (let i = 0; i < num2 ;i++) {
//     result = result * num1 ;
//  }  
//  console.log(result)

//  console.log(Math.pow(num1 , num2))

//#endregion

//*********************************************************************/

//#region 13- Write a program to enter marks of five subjects and calculate total, average and percentage. 

// let num1 = Number(window.prompt("Enter Number 1")) ; 
// let num2 = Number(window.prompt("Enter Number 2")) ; 
// let num3 = Number(window.prompt("Enter Number 3")) ; 
// let num4 = Number(window.prompt("Enter Number 4")) ; 
// let num5 = Number(window.prompt("Enter Number 5")) ; 

// let arr_number = [num1 , num2 , num3 , num4 , num5] ; 

// let total = 0 ; 

// for (let i = 0; i < arr_number.length; i++) {
//     total += arr_number[i] ; 
// }

// let average = total / arr_number.length 
// let percentage = (total * 100) / 500

// console.log(`Total Marks = ${total}`)
// console.log(`Average Marks = ${average}`)
// console.log(`Percentage = ${percentage} %`)

//#endregion

//*********************************************************************/

//#region // 14 -Write a program to input month number and print number of days in that month.
// let days = Number(window.prompt ("Enter Your Month")) ;
//     switch (days) {
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log(` Days in Month: 31`)
//             break;

//             case 2: 
//             console.log(` Days in Month: 28`)
//             break ; 

//             case 4: 
//             case 6: 
//             case 9: 
//             case 11: 
//             console.log(` Days in Month: 30`)
//             break ; 

//         default:
//             console.log(`Please Invalid Number`)
//             break;
//     }
//#endregion

//*********************************************************************/

//#region 15 - Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade
// Percentage >= 90%: Grad A
// Percentage >= 80%: Grad B
// Percentage >= 70%: Grad C
// Percentage >= 60%: Grad D
// Percentage >= 40%: Grad E
// Percentage < 40%: Grad F

let Physics_Mark = Number(window.prompt("Physics Mark"));
let Chemistry_Mark = Number(window.prompt("Chemistry Mark"));
let Biology_Mark = Number(window.prompt("Biology Mark"));
let Mathematics_Mark = Number(window.prompt("Mathematics Mark"));
let Computer_Mark = Number(window.prompt("Computer Mark"));

let subjects = [Physics_Mark, Chemistry_Mark, Biology_Mark, Mathematics_Mark, Computer_Mark];
let total = 0;
for (let i = 0; i < subjects.length; i++) {
    total += subjects[i];
}
let percentage = (total * 100) / 500;

percentage >= 90 ? console.log(`percentage ${percentage}% : Grad A`)
    : percentage >= 80 ? console.log(`percentage ${percentage}% : Grad B`)
        : percentage >= 70 ? console.log(`percentage ${percentage}% : Grad c`)
            : percentage >= 60 ? console.log(`percentage ${percentage}% : Grad D`)
                : percentage >= 40 ? console.log(`percentage ${percentage}% : Grad E`)
                    : percentage < 40 ? console.log(`percentage ${percentage}% : Grad F`) : "";

//#endregion

//*********************************************************************/

