// //array in the js 
// const a=[1,2,4];
// const b=[12,3,4,3];
// const m=a.concat(b);
// console.log(a);
// console.log(b);
// console.log(m); // array 

// const num1=[2,24,56];
// console.log(num1.every(n=>n%2===0));


// //filter();
// const nums=[2,3,4];
// const even=nums.filter(n=>n%2===0);
// console.log(even);


//for //each //eveery
let arr=[1,2,3,4];
//here is the push option
arr.push(10);
console.log(arr);
//array practice
const num=[1,2,3,4,5];

num.push(10);
//push the element in the array 
console.log(num);

//here is the pop element
num.pop();
console.log(num);

//to oadd the element in the beginnign 
num.unshift(88);
console.log(num);
//it is used to remove the element ar the begin

num.shift();
console.log(num);


const b=[1,2,3];
const c=num.concat(b);

console.log(num);


//join is used to convert the array into the string 

let fruits=["apple","red","tel"];
console.log(fruits.join(", "));

//here is the index of

console.log(num.indexOf(3));
console.log(num);


//return is present in it
console.log(num.includes(3));


//here is the reverse part of the array 
num.reverse();
console.log(num);


num.sort();
console.log(num);


num.forEach((ele)=>console.log(ele*2));


let double=num.map((n)=>n*n);
console.log(double);
//is is used for specific

let adult=num.filter((age)=>age>2);
console.log(adult);


//check teh student 
const students=[
   { name:"x",marks:95},
   { name:"y",marks:75},
   { name:"z",marks:55},
   { name:"m",marks:45},
]

console.log(students[0]);


students.forEach((ele)=>{
    if(ele.marks>=50){
        console.log(ele.name);
    }
})

let ee=students.filter(ele=>ele.marks>=50);  //here we are storin the result in teh ee
console.log(ee);
let marks=students.reduce((acc,ele)=>acc+ele.marks,0);
let avg=marks/students.length;
console.log(avg);

const arr1=[10,20,30,40];

const [a,q]=arr1;
console.log(a);
console.log(q);


const [x, ,y,z=100,m]=[1,2,4];
console.log(x,y,z,m);
//destructor 
//it is applicabe on arary n object
const person={name:"Alice",age:18,country: "India"};
const {name,age}=person;
console.log(name)
console.log(age);

//if we want to chnag the key
const {name :n,country: ci}=person;

console.log(n,ci);

