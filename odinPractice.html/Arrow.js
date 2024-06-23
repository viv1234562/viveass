//console.log("Hy i am vivek");

// Arrow function

// var greeting = (name)=>{
//     // console.log(`"hello",${name}`);
//     return name;
// }

// const vi = greeting(`hello my name is : ${"vivek"}`)
// console.log(vi)



// normal function

// function varoo(a,b){
//     return a+b;
// }
// const cc = varoo(9,8)
// console.log(`hello:${cc}`);


//

// function kumar(name){
//     return name;
// }
// const kk = kumar("vivek")
// console.log(kk)


// var kumar = (name)=>{
// console.log(`hello ${name}`)
// }
// kumar("vivek");


//destructurig

// const car ={
//     color: "red",
//     seat : "6",
//     tyers : "4",
// }
// console.log(car.tyers);
// console.log(car.seat);
// console.log(car.color);

// const person = {
//     name : "vivek",
//     age : "24",
//     id : "2333",
// }
// let {name, age , id } = person;
// console.log(name)
// console.log(id)
// console.log(age)

// scope in javascript

// Global Scope

// var  a = 10;

// var func1 = function(){
//     var innerFunc = function(){
//         console.log("a is accesisble", a);
//     }
//     innerFunc();
//     return;
// }
// func1();

// Local Scope

// Function Scope

// var a  = 10;
// var func1 = function (){
// var b = 11;
// console.log("func1 (outer) function", a,b);
// var innerFunc = function (){
//     console.log("func1 (inner) function", a,b);
//     console.log("a is accessable", a);

// }
// innerFunc();
// return;
// }
// func1();
// console.log("a" , a);

//

// var a =12
// var b =10;  

// var fun = ()=>{
//     // var b =10;
//     return a+b;
// }
// //  fun();
// var vivek = fun( a, b);
// console.log(`Adding of two number is a+b = : ${vivek}` )










// Block Scope





//******* */

// w = 20 ;
// var a  = 10;
// var func1 = function (){
// var b = 11;
// console.log("func1 (outer) function", a,b);
// var innerFunc = function (){
//     z = 30;
//     console.log("func1 (inner) function", a,b);
//     console.log("a is accessable", a);

// }
// innerFunc();
// return;
// }
// func1();
// console.log("a  w" , a , w);


// // __proto__ in javascript

// let vehicles = {
//     wheels: 4,
// };
// let driver  = {

// }; 
// let car = {
//     seat : 5,
//     __proto__:vehicles,
//     wheels :6,
// };

// console.log(`vehicle`,vehicles,vehicles.__proto__ );
// console.log(`car`,car,car.__proto__ .wheels.Number );
// console.log(`driver`,driver,driver.__proto__ );

//prototype

let vehicle ={
    wheels: 4,
};

let car  = {
    __proto__:vehicle,
    wheels:6
};
let driver = {

};
console.log("vehicle", vehicle,vehicle.__proto__);
console.log("car",car, car.__proto__);
console.log("car wheels", car, car.wheels);

// constructor function

function Employee(nameP, ageP, desigP){
    this.name = nameP;
    this.age = ageP;
    this.desig = desigP;
    // this.setAge = newAge =>{
    
    // }
    //or 
    this.setAge = function(newAge){
        this.age = newAge;
    }
    this.company = "Amazon";
}
Employee.Area = "India";
var emp1 = new Employee("viveek", 25, "Manager");
var emp2 =  new Employee("hieitik", 26, "devloper");
console.log("emp1", emp1)
console.log("emp2", emp2 )
emp1.setAge(26);
console.log("after set age emp1", emp1);

// constructor class
class user{
    constructor(nameP, ageP, desigP){
        this.name  = nameP;
        this.age = ageP;
        this.desig = desigP;
        this.setAge =function(newAge){
            this.age = newAge;
        
    }
}
printAge(){
    console.log(`${this.name} is ${this.age} years old`)
}
}

var user1 = new user("amit", 26, "software devloper")
console.log("user1",user1);

//json javascript object notation















































