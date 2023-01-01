const prompt = require("prompt-sync")();        //importing package to use prompt for taking user input .
//  JavaScript Basic Practice Problems  .
/*
//To Get a Single Digit Number .
console.log(Math.floor((Math.random()*10)%10));

//Use Random to get Dice Number between 1 to 6
console.log(Math.floor((Math.random()*(6)+1)));

//Add two Random Dice Number and Print the Result
const dice1Output=Math.floor((Math.random()*(6)+1));
console.log("Dice 1 output :" +dice1Output);
const dice2Output=Math.floor((Math.random()*(6)+1));
console.log("Dice 2 output :" +dice2Output);
const addResult=parseInt(dice1Output+dice2Output);
console.log("The sum of " + dice1Output + " and " + dice2Output + " is: " + addResult);

//Write a Program that reads 5 Random 2 Digit values,then find their sum and the average.
const num1 = Math.floor((Math.random()*(90)+10));
const num2 = Math.floor((Math.random()*(90)+10));
const num3 = Math.floor((Math.random()*(90)+10));
const num4 = Math.floor((Math.random()*(90)+10));
const num5 = Math.floor((Math.random()*(90)+10));
const sum = num1 + num2 +num3 + num4 + num5;
console.log("Addition of all given 5 numbers : " +sum);
const average=sum/5;
console.log("Average : "+average);

//Unit Conversion
const inch =1;
const feet = inch*12 ;
console.log("Given inch : 42 ,Converting into Feet :"+(42/feet));
var mul = 60*40;
var Plot= mul/3.281;
console.log("Plot of 60 feet * 40 feet is:"+ Plot+" meters");
var TwentyFivePlots = Plot*25;
var inAcres = TwentyFivePlots/4047;
console.log("Area of 25 Plots in acres :"+ inAcres);
*/

//-----if else Selection Practice Problems------------

//Program that reads 5 Random 3 digit values and then outputs the min and max value .
const num1 = Math.floor((Math.random()*(900)+100));
const num2 = Math.floor((Math.random()*(900)+100));
const num3 = Math.floor((Math.random()*(900)+100));
const num4 = Math.floor((Math.random()*(900)+100));
const num5 = Math.floor((Math.random()*(900)+100));
console.log("All 5 Three Digit Random Numbers : "+num1 +" "+num2+" " +num3+" " +num4+" " +num5)
let min=Math.min(num1,num2,num3,num4,num5)
console.log("Minimum no is :"+min)
let max=Math.max(num1,num2,num3,num4,num5)
console.log("Maximum no is :"+max)

//Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
var dayInput =prompt("Enter day number");
var day=parseInt(dayInput);
var monthInput=prompt("enter month number");
var month=parseInt(monthInput);
if(day>=20 && day<=31 && month==3 || day>=1 && day<<30 && month==4 || day>=1 && day<=31 && month==5 || day>=1 && day<=20 && month==6)
console.log("True")
else
console.log("False")

//Leap year or not .
var yearInput =prompt("Enter day number");
var year=parseInt(yearInput);
if(year%4==0)
console.log("Leap year")
else
console.log("not a leap year")

//coin flipped and print out "Heads" or "Tails" accordingly
const coinFlipped = Math.floor((Math.random()*2));
if(coinFlipped==0)
console.log("Heads")
else
console.log("Tails")



