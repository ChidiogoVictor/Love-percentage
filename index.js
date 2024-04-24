var firstName = prompt("What is your name?");    
var SecondName = prompt("What is your friend name?");
var lovePer = Math.random();
lovePer = lovePer * 101;
lovePer = Math.floor(lovePer);

if(lovePer >= 70){
    alert(firstName + " and " + SecondName + " Love score is " + lovePer + "%, You are best lovers ever!💖");
} else if (lovePer > 50 && lovePer < 70){
    alert(firstName + " and " + SecondName + " Love score is " + lovePer + "%, You are good lovers!");
} else{
    alert(firstName + " and " + SecondName + " Love score is " + lovePer + "%.");
}