// String is a sequence of characater used to represent text
let str = "vivek";
console.log(str.length);

// inbuilt properties

// 1String length

let str2 = "Apnacollege";
console.log(str2[8]);


//template literal 
// A way to have embeded expression in string


let sentence = `This is Template literal`;
console.log(sentence);

// why are using template literals
//ex
let obj = {
    item:"pen",
    price :10,
};
console.log("the cost of",obj.item,"is",obj.price,"rupees");

let output= `"the cost of "${obj.item} is ${obj.price} rupees `;
console.log(output);
// string interpolation
//${1+2+3}


//scap character
let str6 = "apnaco\nllage"
console.log(str6.length );
console.log("Vivek \n kumar")

//tab character

console.log("Vivek \t kumar")

// Sring Methods / String function;
// string are block of code 
// string is immutable // means not change

//1 toUpperCase
let strr = "ApnaCollege";
console.log(strr.toUpperCase());

//2 lowerCase
console.log(strr.toLowerCase());

// 3 trim 
 let stry = "  vivek kumar  ";
 console.log(stry.trim());

// slice method // ending value non encluding
 let strc = "0123456789";
 console.log(strc.slice(1 ,6))

 let strcc = "Hello"
 console.log(strcc.slice(1, 3))


// cancat // means adding

let str1 = "apna";
let str22 = "College";
let rest  = str1.concat(str22);
console.log(rest);

// replace 
let sr = "hello";
console.log(sr.replace("h", "y"))


// charAt// searching of character

let yr = "loveJS";
console.log(yr.charAt(4))

// String practice question
//promt the user to enter their full name . generate  a user name for them based on input  start username with @ , followed by their full name endig with full name length



let fullName = prompt("enter your full name without space");
let userName = "@"+ fullName + fullName.length;
console.log(userName);






















































































