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
*/

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