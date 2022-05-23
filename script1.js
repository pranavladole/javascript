// javascript interview
//https://www.fullstack.cafe/blog/javascript-code-interview-questions

//reverse a string from

// var string1 = "welcome to world"
// console.log(string1.split("").reverse().join(""));

// to check array syntax
// var arr1 = [1, 2, 3];
// var string = "welcome";

// function greet(arr1){
//     if(typeof arr1 === "string"){
// console.log("string is there");
//     }
//     else{
//         console.log("array is there");
//     }
// }
// greet(string);


// empty an array with

// var arr1 =['a','b','c','d','e','f'];
// console.log("before"+arr1)
// var arr2 = arr1;
// arr1=[];
// console.log("empty after"+arr1);

// check if no is integer value

// function isInt(num){
//     return num%1 === 0;
// }

// console.log(isInt(2));
// console.log(isInt(24.9))
// console.log(isInt(2.33))

var arr1 = [1, 2, 3, 4, 5];

function dup(){
    return arr1.push(arr1)
}

var arr2 = dup()
console.log(arr2)