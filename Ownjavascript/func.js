// console.log("connected");
// function myFunction(){
//     console.log("welcome to Apna college")
//     console.log("we are learning JS :)");
// }

// myFunction();

//2

// function yourfunction(msg){ // parameter is input
//     console.log(msg)
// }
// yourfunction("I love JS") // argument


// create a number using function sum of two number;

// function sum(a,b){
//     console.log(a+b);
// }
// sum(1,2);
// or

// function sum(a,b){
//     sum = a+b;
//     return sum;
// }
//  let = sum(5,8);
//  console.log(sum)

 // parameter  is bock scope 

 //Arrow functon

//  let sum=(a,b)=> {
//    sum = a+b;
//    return sum;
//  }
//  let = sum(7,9);
//  console.log(sum);

// // multiplication arrow function
// let mul = (x,y) =>{
//     mul = x*y;
//     return mul;
// }
// let = mul(10,800);
// console.log(mul);

// practice question 
// Create a function using the "function " keyword that take a String as an an argument & return the number of volel in the String.

// function volel(str){
//      let count = 0;
//     for( let char of str){
//         console.log(char);
//      if(char ==="a" || char ==="e"|| char ==="i" || char ==="o"|| char==="u" ){
//         count++;
//  }

//  }
//  return count;
// }
// console.log(volel("vivek"))

//  let vovel= (str)=>{
//     count = 0 ;
//     for(let char of str){
//         console.log(char)
//         if(char==="a"|| char=== "e"|| char==="i"|| char==="o"|| char==="u"){
//             count++
//         }
//     }
//     return count;
//  }
 
//  console.log(vovel("vivek"));



//for each loop

//  let arr = [1,2,3,4,5];
// arr.forEach(function printVal(value){ // value of each index
// console.log(value)

// })

// using arrow function 

// arr.forEach((value) =>{
//     console.log(value);
// })

// callback have 3 value  para : value,index, arrayitself;

// let brr = ["Mumbai","delhi","hydrabad", "banglore"];
// brr.forEach((value ,index ,brr)=>{
//     console.log(value.toUpperCase() ,index, brr);
// })

// import quest 

// what iis higher order function/ method
//Ans
// forEach


// let crr = [2,3,4,50];
// crr.forEach((idx)=>{ // or num **2
// console.log(idx*idx)
// })

// Some of More Array Method

// Map method  : map is very similar and callback return new array

// let nums = [6,7,8,9];
// nums.map((val)=>{
//     console.log(val);
// })

// return map value give the new array

// let nums = [6,7,8,9];
//  let newarr=nums.map((val)=>{
//     return val;
    
// })
// console.log(newarr);

// filter method : Array heve given but some element filter of array

// even no filter

// let drr = [3,5,6,9,8,4];
// let newArr = drr.filter((val)=>{
// return val %2===0
// })
// console.log(newArr);


// reduce method 
//  let krr = [4,6,7,8,9] 
// let output= krr.reduce((res,cur) =>{
//     return res+ cur;
//  })
//  console.log(output)


// practice question 
//We are given array of marks of student of marks filter marks 90+

// let jrr = [40,90,76,95]
// let newArr = jrr.filter((val)=>{
//     return val>90;
// })
// console.log(newArr)


// let n = prompt("enter a number :");
// let arr1  = [];
// for(i=1; i<=n; i++){
//     arr1[i-1] = i;
// } 
// console.log(arr1)
// let output = arr1.reduce((pre ,curr)=>{
//     // return pre + curr;
//     return pre* curr;

// })
//  console.log(output)

//arrow function question

// let myFunction = (a, b) => a * b;
// console.log(myFunction(8,7));

// let hello = function() {
//     return "Hello World!";
//   }
//   console.log(hello());

// with arrow function
// hello =()=>{
//     return "hello world"
// }
// console.log(hello());



 function fun(a,b){
    return a+b;
 }
 console.log(fun(7,8));
    

































































































































































 














































