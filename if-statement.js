console.log("Conditionals");

//if-statements
//if(condition){y/n?
//code to be executed if the condition is true
//}

if(13<5){
    console.log("this is true");
}

let student1 =25;
let student2 =25;

if(student1==student2) {
    console.log("the values are the same");
}
//if-else statement
//if(condition){
//code to be run if the condition is true
//} else{
//code to be run if the conditon is false
//}
let isTrue= true;

if(isTrue==true){
    console.log("yes");
}else{
    console/log("NO");
}

let Watertemp =92;

if( Watertemp>=100){
    console.log("The water is boiling");
}else{
    console.log("The water is Not boiling");
}

let age=30;

if(age>21) {
    console.log("you are an adult");
}else{
    console.log("you are underage");
}


age= prompt("Enter the age");

if(age<13){
    console.log("you are a child");
}else if(age<21){
    console.log("you are a teenager");
} else if(age<64){
    console.log("you are an adult");
}else{
    console.log("Your are a senior");
}

light= prompt("Enter the light color");

if("green"){
    console.log("Go!");
}else if (" yellow"){
    console.log("Slow down!");
} else if("red"){
    console.log("Stop!");
}

function ticketCalculator(){
    //your code should be here
    let age = prompt("Enter the age");
    let price=0;
    if(age<12){
        price=5;
    }else if(age<18){
        price=8;
    }else{
        price=10;
    }
    console.log( "Your ticket price is: $" + price);
}

function  WeatherOutfit(){  let tmp = prompt("Enter the temperature");
    let outfit;
    let p = document.getElementById("weather");
    
    if(tmp<15){
        outfit="Jacket"; 
    }else if(tmp<25){
        outfit="sweater";
    }else{
        outfit="t-shirt"; 
    }

    p.innerHTML="You should wear : " + outfit;
}



// Switch

let action = prompt("Choose an action:jump, run, attack, or defend");

switch(action){
    case "jump":
        console.log("You jumped over an obstacle");
        break;
    case "run":
        console.log("You are running fast");
        break;
    case "attack":
        console.log("You attacked the enemy!");
        break;
    case "defend":
        console.log("You blocked the attack");
    default:
        console.log("Unknown action. Try again!");
    case "transform":
        console.log("you transform before the enemy!");
    case "dance":
        console.log("victory win dance!"); 
}





