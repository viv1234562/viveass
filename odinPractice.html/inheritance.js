// function Human(name , age){
//     this.name = name;
//     this.age = age;
//     this.arms = 2;
//     this.legs = 2;
// }
// function Employee(name, age, desig){
//     Human.call(this,age,name);
//     this.setAge = function(newAge){
//         this.age = newAge;
//     }
// }

// // if i want to updates the legs 
// Employee.prototype = Object.create(Human.prototype)
// Employee.prototype.constructor = Employee;



// var emp1 = new Employee("Mark", 21, "Manager")
// var emp2 = new Employee("pointer", 34,"Devloper")

// Human.prototype.feet = 2;

// console.log("emp1", emp1);
// console.log("emp2", emp2);





//innheritance
//  class childClassName  extend ParentsClassName {
//     constructor(para1, para2){
//         super(param1, param2)
//     }
// }
// class Human{
//     constructor(name , age){
//       this.name = name;
//       this.age = age;
//       this.arms = 2;
//       this.legs = 2;
//     }
// }
// class Employee extends Human{
//     constructor(name,  age, desg){
//         super(name, age);
//         this.desg = desg;
//     }
//     setAge(){

//     }
// }
// var emp1 = new Employee("vivek", 21 , "Manager");
// var emp2 = new Employee("Mohan", 24 , "developer");

// console.log("emp1" , emp1);
// console.log("emp2",emp2 )





class Human{
    constructor(name, age){
        this.name  = name;
        this.age = age;
        this.arms  = 2;
        this.legs = 2;
    }
}
   class Employee extends Human{
            constructor(name, age, desig){
                super(name, age)
                this.desig = desig;
                this.age = age
            }
            // setAge(){

            // }
   }
   var emp1 = new Employee("vivek", 25, "software developer");
   var emp2 = new Employee("rohit", 26, "software developer");

   console.log(emp1);
   console.log(emp2);











