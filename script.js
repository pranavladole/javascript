console.log("hi");

let sum = 0;
const numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
}

console.log(sum)

let sum1 = -100;
const numbers1 = [10,20,30,40,50]

numbers1.forEach(items);

function items(a){
    sum1 += a;
}

console.log(sum1)


const arr = 
[
    {"id":1 , "name":"john" , "gender":"M" , "contact":"123456789"},
    {"id":2 , "name":"dolly" , "gender":"F" , "contact":"8888"},
    {"id":6 , "name":"bishop" , "gender":"M" , "contact":"777"},
    {"id":3 , "name":"angy" , "gender":"F" , "contact":"458888"},
    {"id":9 , "name":"sham" , "gender":"M" , "contact":"8457888"},
    {"id":5 , "name":"jram" , "gender":"M" , "contact":"4578888"},
]





//var arr1 = arr.filter(function(a){return a.name=="john"})
//console.log(arr1);

//desc
// arr.sort(function(a, b) { 
//     return b.id - a.id 
//   });


  //asc
// arr.sort(function(a, b) { 
//     return a.id - b.id 
//   });

//contact
// arr.sort(function(a,b){
//     return a.contact.localeCompare(b.contact)
// })

//gender by male female
//var arr1 = arr.filter(function(a){return a.gender=="F"})

// sum of id and
// let sums = 0;
// for (var i = 0; i < arr.length; i++) {
//   //var obj = arr[i];
//   //sums[obj.id] = sums[obj.id] === undefined ? 0 : sums[obj.id];
// sums += parseInt(arr[i].id);
// }

// console.log("sum is"+sums);


//sum of even elements
// let sums = 0;
// for (var i = 0; i < arr.length; i++) {
//      if(parseInt(arr[i].id)%2!=0){
//         sums += parseInt(arr[i].id);
//      }
// }
// console.log("sum of even is"+sums);

//sum of male 

// var sumM = 0;
// for(var i = 0; i <arr.length ; i++){
//     if(arr[i].gender=="M"){
//         sumM = sumM +1 ;
//         console.log(arr[i].gender)
//     }
// }

// console.log("sum of male is"+sumM);


// get first element from name array

// var name1=[]
// for(var i=0; i<arr.length; i++){
//     name1[i]  = arr[i].name[0]
//     if(arr[0].name[0] == arr[i].name[0]){
//         console.log("matching john is" + arr[i].name)
//     }
//     console.log("name first element"+name1[i]);
// }


// revrese string name
// var str=[];
// for(var i=0; i<arr.length;i++){
//    str[i] =  arr[i].name.split("").reverse().join("");
//    console.log("revrese name is "+str[i])
// }

//revrese contact
// var con = arr[0].contact.split("").reverse().join("");
// console.log(con)

// access first 2 elements from string
// var con = [];
// for(var i=0; i<arr.length; i++){
//      con[i] = arr[i].contact.substring(0,2)
// console.log(con[i])
//     }

// to find character at specified position

// var char = arr[0].name.charAt(2);
// console.log("char at john "+char);

// var arr1 = [];

// for(var i = 0; i < arr.length; i++){
//     console.log(arr[i].name)
//     //arr1.push(arr[i].name);
//     arr1 = arr[i].concat(arr[i+1])
// }
// console.log(arr1);