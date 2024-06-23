console.log("DOM🔥🔥🔥");


//<-------DOM------------> document object model
// console.log("hello")
// window.alert("alert");

// console.dir(window.document);
// console.log(window.body);

// console.dir(document.body.childNodes[1]);

// document.body.style.background = "green"



// DOM manipulation------>


// 1 using --id   id to be unique
// let header= document.getElementById("heading")
// console.log(header);

// 2 using --class  // return to html collection it is very similar to array

//  let vivek=document.getElementsByClassName("heading");
//  console.log(vivek);
//  console.log(vivek);


 // using tagName --->
// let para = document.getElementsByTagName("p")
// console.log(para);



// better querry selector -->
// let elements = document.querySelectorAll("h1") // nodeList
// console.dir(elements);



// H.W PROBLEM ,  first child last child and children and document of all element

// DOM Manipulation ---> properties --->

// texContent // hidden element ko dekhte hai


// practice question 
// Create a H2 heading element with text - "Hello JavaScript". Append "from Apna College student " to this text using JS


// Append means last me add karna text;
// text ko change karne ke liye inner text;
// let h2 = document.querySelector("h2");
// console.log(h2.innerText);

// h2.innerText = h2.innerText + " from Apna college student ";
// console.log(h2.innerText);


// 2nd practice question
// Create 3 divs with common class name  - "box" Access them add some unique to each of them


// let div = document.querySelectorAll(".box");

// div[0].innerText = "unique value 1";
// div[1].innerText = "unique value 2";
// div[2].innerText = "unique value 3";
// console.log(div[0], div[1],div[2]);


// or 

// let idx = 1;
// for( let divv of div ){
//     divv.innerText = `new unique value ${idx}`;
//     idx++
// }
// console.log(div.innerText);

// class ======2

//** getAttributes */

// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id")
// console.log(id);

// let name = div.getAttribute("name")
// console.log(name);

//** setAttribute */ if  i want change the value

//let para = document.querySelector("p");
//console.log(para.setAttribute("class","newClass"))

// ** style**//

// let div  = document.querySelector("div");
// div.style.backgroundColor="green"

// div.style.fontSize = "26px"

// div.innerText = "Hello"

//***div.style.visibility="hidden"

//PROPERTY  how to new element add 

//  let newButton = document.createElement("button")
//  newButton.innerText = "Click me"
// console.log(newButton);


// Apend method ---> jis bhi element ke last me add karna ho
//1**add append ending upon

// let divv = document.querySelector("div");
// divv.append(newButton);



// if i want to add start the nodes then used to prepend
// **2

// let div = document.querySelector("div");
// div.prepend(newButton);

// if i want to just before of div then used
// **before

// let div = document.querySelector("div");
// div.before(newButton);

//if i want  to just after the div then i used to after
//** after */

// let div = document.querySelector("div");
// div.after(newButton);

// ------------------



let newHeadding = document.createElement("h1");
newHeadding.innerHTML="<i>My name is vivek kumar<i>";

document.querySelector("body").prepend(newHeadding);



// IF I want to delete any node then


let para = document.querySelector("p");
para.remove();




















































































 
