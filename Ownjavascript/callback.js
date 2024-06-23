console.log(" Hi 🔥🔥😊😊");

// Syc program

// console.log("One");
// console.log("Two");
// console.log("Three");


// setTimeout function

// function hello(){
//     console.log("hello");
// }
// setTimeout(hello, 6000);


// Callback function

// function sum(a,b){
//     console.log(a+b);
// }
// function calculater(a,b, sumCallback){
//     sumCallback(a,b);
// }
// calculater(1,2,sum)

// Callback Hell   // nesting callback

//  function getData(dataId, getNextData){  // 2s
    
//     setTimeout(()=>{
//         console.log("data", dataId); 
//         if(getNextData){
//         getNextData();
//         }
//     },2000);

// }
// getData(1, ()=>{
//     getData(2, ()=>{
//         getData(3);
//     });
// });
// getData(1) // 2S
// getData(2) // 2s
//getData(3) // 2s

// data1
//data2
// data3

// callback hell solve karne ke liye promises use karte hai

// promise

// let promise  = new Promise((resolve, reject)=>{
//     console.log("I am promised");
//     resolve(123);
// })


// promised when used to then success
// when i used catch then error
// const getPromise  = ()=>{
//    return  new Promise((resolve , reject)=>{
//         console.log("I am a promise");
//         resolve("success");
//     });
// };

// let promise = getPromise();
// promise.then(()=>{
//     console.log("promise fullfilled")
// });


//promise chain
 function asynFunc(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data1");
            resolve("Success");
        }, 4000)
    });
 }
 function asynFunc2(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("some data2");
            resolve("Success");
        }, 4000)
    });
 }
 console.log("fetching data1");
let p1 = asynFunc();
p1.then((res)=>{
    // console.log(res)

    console.log("fetching data2");
    let p2 = asynFunc2();
    p2.then((res)=>{
        // console.log(res)
    })
})











































































