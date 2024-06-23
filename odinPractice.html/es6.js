//normal function
console.log("vivek rajput")

// function greeting(name){

//      console.log(`'hello', ${name}`);
//      return name;
// }
//  greeting('vivek')
// console.log(`${returnedName}`);

// let greeting  = (name) =>{
//     console.log(`hello ${name}`)
//     return name
// }
// greeting("vivek");


// function vivek(a,b) {
//     //console.log(`Adding of two number is  ${a+b}`)
//     return a*b;
// }

// const value = vivek(9,5)
// console.log(`multiplication of two number :${value}`);


// let vivek  = (a,b)=>  a+b;

// const value  = vivek(25,5);
// console.log(`Adding the two number is :${value}`)


// function greeting(name){

//         //  console.log(`'hello', ${name}`);
//           return name;
//      }
//      const nnn =  greeting('vivek')
//      console.log(`hello: ${nnn}`);


     
// function greeting(name){

//       console.log(`'hello', ${name}`);
      
//  }
//  greeting("vivek")

//  // rest collector

//  var [a,b,c,  ...f] = [1,2,3,4,5,6]
//  console.log(a);
//  console.log(b);
//  console.log(c);
//  console.log(f);


//  // spread
//  var data1 = ["ravi", "bvbvb",8999];
//  var data2 = ["hfhf","hfhhf",5666 , ...data1];
//  console.log("data2", data2)


//**8 Event Bubbling & capturing */
// Stop propagatio , Immediate Propagation & Prevent Default



//1  Event Bubbling  ---> Child to Parents
 var div = document.querySelector("div")
 var button = document.querySelector("button")
 var a = document.querySelector("a");

//  div.addEventListener("click",()=>{
//       console.log("div")
//  })

//  button.addEventListener("click",()=>{
//       console.log("button")
//  })



 //2 Event capturing ---> Parent to Child
//  div.addEventListener("click",()=>{
//             console.log("div")
//         },true)

//  button.addEventListener("click",()=>{
//       console.log("button")
//  }, true);


//3 Stop propagation

// div.addEventListener("click",()=>{
//       console.log("div")
//   })

// button.addEventListener("click",(e)=>{
//       e.stopPropagation();
// console.log("button")
// });


// 4  Imidate propagation -- if i have add multipe listener
// button.addEventListener("click",(e)=>{
//       // e.stopPropagation();
//       console.log("button")
// })

// button.addEventListener("click",(e)=>{
//       e.stopImmediatePropagation();
// console.log("button1")
// });


// 5 prevent default if brower stop the file
 
// a.addEventListener("click",()=>{
//       e.preventDefault();
//       console.log("a")
// })



// normal function

var greeting = (name) =>{
    console.log(`hello, ${"name"}`);
}












 


































