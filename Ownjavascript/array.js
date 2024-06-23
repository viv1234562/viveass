// arrays
console.log("connected") 

// collection of linear data

let marks  = [97, 83, 76, 68];
console.log(marks, marks.length);


//properties length;

let heroes = ["nff","ekmndk","jdje","ejdjj"]
console.log(heroes);

marks[0] = 66
console.log(marks);

//loop over an Arrays
let vivek = ["uueuu","jehe","jeheh","jejje","ejjej","ejjej"]
for(let i=0; i<vivek.length; i++){
console.log(i,vivek[i]);
}

let cities = ["delhi","pune","mumbai","kolkata"];
for(let city of cities){
console.log(city.toUpperCase());
}
// practice question
//for a given array wit marks of student  [85,97,44,37,76,60] Find the average marks of entire class

let markss = [ 85,97, 44,37,76,60];
let sum =0;
for(let i=0; i<markss.length; i++){
    console.log(markss[i])
     sum = sum+markss[i];
     console.log(sum);
}
// console.log(sum);
let avg = sum/ markss.length;
console.log(avg);


 //same question by using of for of loop
 let marksss = [12,34,56,78,45,9];
 let sum1 = 0;
 for(let [index, value]of marksss.entries()){
     sum1  = sum1+value;
}
 console.log(sum1)
 let avg1 = sum1/marksss.length;
 console.log(`avarage of marks of student is: ${avg1}`)

// For a given array with prices of 5 items -> [250, 645, 300, 900, 50] atllitems have an 0ffer 10% OFF Change the array to store final price after applying offer.
  
let items = [250, 645, 300, 900, 50]
for(let i =0; i<items.length; i++){
    let offer = items[i]/10;
    items[i] = items[i] - offer;
    console.log(i,items[i])
}

// Array methods 

//PushManager() add end

let veg = ["patao", "apple", "tamato"];

veg.push("oranges","burger");
console.log(veg);

// pop () delete from end and return
veg.pop();
console.log(veg)

// toString  i wnat to array to String
console.log( veg.toString());

// slice 
let arr = [2,4,6,9,7];
// for(let i = 0; i<arr.length; i++){
    console.log(arr.slice(1,3));
//}

// splice method (startindex , delcount, newElement)
let arr1 = [3,5,6,7,8,9];
arr1.splice(1 , 2, 100);
console.log(arr1);

// practice set question
// Create an array to store companies -> "Bloomberg", "Uber","Google","IBM","Netflix"
let companies = ["Bloomberg", "Uber","Google","IBM","Netflix"]
console.log(companies);

//a Remove the first company from the array
companies.shift(0);
console.log(companies);

//b Remove Uber & Add Ola in its place 
 companies.splice(0,1,"Ola");
 console.log(companies);


// Add Amazon at the end
companies.push("Amazon");
console.log(companies);









































































