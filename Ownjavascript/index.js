price2 = 99.99;
console.log(price2);
x=null;  // khali value 
y = undefined; // y exist hi mhi karti;
console.log(x);
console.log(y);

//boolean type variable 
// store in true and false
// javascript is dynamic type of language
// nhi batana hota variable me kya store like int boolean and float


// <--- VARIABLE RULES --->

// *Variable are case sensitive; "a" &"A" is different.
// * Only letter , digit underscore(_) and $ is allow .(not even space)
// * Only a letter, underscore(_) or $ should be 1st character.
// * Reserved words cannot be variable names.



// variable let cont var
var fullName = " tony stark";
var age =24;
var totalPrice = 1000;

console.log(fullName);


// data Type in js
//1 primitive data type 7type
//Number , String , Boolean, Undefined, Null, BigInt,Symbol;

//non primitive 
// object

let ageOf = 24;
let priceOf = 400;
console.log(typeof age);

//objects is is collection of value

const student = {
    fullName : "Vivek kumar",
    age : "20",
    cgpa: 8.2,
    isPass: true
};
student["name"] = "rahul";
console.log( typeof student);
console.log(student.fullName);
console.log(student["name"]);

//Practice Question
//Q1. Create a const object called "product" to store information;

const product = {
    title: "Ball pen",
    rating: 4,
    price: 270,
    offer : 5,

};
console.log( typeof product)
console.log(product);


//Q2 Create a const object called "profile" to store information shown 

const profile = { 
userName: "Vivek kumar",
post : 197,
followers: "556k",
following :4,
isFollow: false,

};
console.log(profile);
console.log(typeof profile);

//Chapter 2 *************
//Operator and caondition 

// Unary operator
let a = 5;
let b = 2;

console.log("a=", a, "& b=", b);

a= a+1; //6
console.log("a=", a);

//odd even number
let num = 10;
if(num%2===0){
    console.log( num, "is even")
}else{
    console.log("odd")


}
//Question
//else-if
let mode="dark";
let color;
if(mode==="dark"){
    color = "black";
 } else if(mode==="blue"){
        color = "bule";
    }else{
        color= "white";
    }
    console.log(color);


    //ternary operator
    //a?b:c
    // age>18 ? "18" : "not adult";
    // console.log(age);

   let age2 = 5;
   let result = age2>=18 ? "adult" : "not adult";
   console.log(result);

   //Practice question
   // Get user to input a number using prompt("Enter a number:"). Check if the number is a multiply of 5 or not.

   //prompt and alert are 2 things

//    alert("hello")

// let name1= prompt ("hello");
// console.log(name1);
//prompt is tempropery user input

// let num5 = prompt("Enter a number");
// if(num5 % 5 ===0){
// console.log("This is multiple of 5 =", num5)
// }
// else{
//     console.log("This number is not multiple of 5",num5);


// }

//Q2 Write a code which can give grade to students according to their scores

// let grades = prompt(0-100);
// if(grades>=90 && grades <=100){
//     console.log("A");
// }else if(grades>=70 && grades <= 89){
//     console.log("B");
// }else if(grades>=60 && grades <= 69){
//     console.log("C");
// }else if(grades>=50 && grades <= 59){
//     console.log("D");
// }else if(grades>=0 && grades <= 49){
//     console.log("F");
// }
// console.log("According to your score, your grades was:", grades);

// ** for-of loop --> they help to iterate on string and arrays
 let str = "ApnaCollege";
 let size = 0;
 for(let i of str){ // iterater;
    console.log("i", i);
    size++;
 }
console.log("String siz=", size);

//for- in loop  object and array used

let student1 = {
    name: "Rahul kuar",
    age:20,
    cgpa: 7.2,
    IsPass: true,

};
for(let i in student1){
    console.log(i, "value =",student1[i]);
}
// print 0 to 100 number in for loop
for(let i=0; i<=100; i++){
    console.log(i);
}


// print all even number from 0 to 100;
 for(let i= 0; i<=100; i++){
     if(i%2==0){
         console.log("even",i);
     }
   
    
 }

// let i=0
//  while(i<=5){
//     i++;
//     console.log(i)
//  }

// 2nd question;
// Create a game where you start with any random game Number. Ask the user to keep
// guessing the game number until the user enters correct useDebugValue.Ask

// let gameNum = 25;
// let userNum=prompt("Guess the game number: ");
// while(userNum!=gameNum){//
//  userNum = prompt("you eter the wrong number: try again")

// }
// console.log("congratutation","You eter the right number")















































































































































