console.log("Welcome event ❤️❤️❤️");
//console.log("vivek");

// event

// some popular event
//Mouse event (click, double click etec)
// keyboard event (keypress , keyup, keydown)
// form event

// let btn1 = document.querySelector("#btn1");

//  btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a =25 ; 
//     a++;
//     console.log(a);
//};
// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//      let a = 25;
//      a++;
//      console.log(a);
// };
// btn1.onclick = () => {
//     console.log("This is handler 2");
// }

//  let div = document.querySelector("div");
//  div.onmouseover = () =>{
//      console.log("you are inside div")
//  };


 //even object that have library store background object 

 //(e) // object object

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (e)=>{
//     console.log(e);
//     console.log(e.type)
//     console.log(e.target)
// }


// event listener

// node.addEventListener(event , callback)


// btn1.addEventListener("click",(e)=>{
// console.log("button 1 is refesh")
// console.log(e.type)
// });

// btn1.addEventListener("click",()=>{
//     console.log("button 2 is refesh")
//     });
//   let handler3 = ()=>{
//         console.log("button 3is refesh")
//   }
//   btn1.addEventListener("click", handler3);

//         btn1.addEventListener("click",()=>{
//             console.log("button 4 is refesh")
//             });


//      btn1.removeEventListener("click", handler3);   
// event listener remove 

// node.removeEventListener(event, callback);


// practice question 

// Ceate a toggle button that changes the screen to dark-mode when clicked & light mode when clicked again


let modeBtn  = document.querySelector("#btn1");

let currentMode = "light";

btn1.addEventListener("click" , ()=>{
    if(currentMode === "light"){
     currentMode = "dark";
     document.querySelector("body").style.backgroundColor ="green";
}else{
    currentMode = "light";
  
    document.querySelector("body").style.backgroundColor ="white";
} 
console.log(currentMode)
})






































