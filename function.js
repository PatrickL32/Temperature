console.log("function.js")

let name ="Mike";
let lastname ="scott";

//cocatenation
console.log("Hello" + name + " " + lastname + ",welcome!");
console.log(`Hello ${name} ${lastname} ${1+1},welcome!`);

//1.function declaration (create a function)
function sayHello(){
//block of the function
console.log("Hello cohort 57");

}

//2.call the function(code, console,from the user)
sayHello();
sayHello();

//Example2, with 1 parameter
function greet(name){
    console.log(`Hello ${name},welcome!`);
}
greet("Hodor");
greet("Ivan");

//example 3, with 2 parameter

function greet2(name1,name2){
    console.log(`hello${name1} and ${name2}, welcome!`)

}
greet2("patrick","kenny");

function doubleNumber(num){
    console.log(num*2);
}

doubleNumber(5);//10
doubleNumber(4);//8
doubleNumber(3);//6

function welcome(){
    let name2=prompt("Enter your name: ");
    let age2 =prompt("enter your age: ");

    console.log(`welcome${name2}-${age2}`);
}

function add(num1=0,num2=0){
console.log(`the sum is${num1} + ${num2} = ${num1+num2}`);
}

add();
add(57.6,9.3);
add(500,100);

//-create a function called `combineNams` that takes two parameters;


function combineNames(fname="unknown", lname="unknown"){
    console.log(` ${fname }${lname} `);

}

combineNames("Alice","Johnson"); //should print: Alice Johnson
combineNames("Alice");           // should print: Alice Unknown
combineNames();                 // shold print: unkown unknown 

function convertToSeconds(){
    let min = prompt("Enter minutes");
    document.getElementById("results").innerHTML= `${min*60} seconds`;    
}





