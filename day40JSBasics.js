//  JavaScript Basic Practice Problems  .
/*
//To Get a Single Digit Number .
console.log(Math.floor((Math.random()*10)%10));

//Use Random to get Dice Number between 1 to 6
console.log(Math.floor((Math.random()*(6)+1)));
*/

//Add two Random Dice Number and Print the Result
const dice1Output=Math.floor((Math.random()*(6)+1));
console.log("Dice 1 output :" +dice1Output);
const dice2Output=Math.floor((Math.random()*(6)+1));
console.log("Dice 2 output :" +dice2Output);
const addResult=parseInt(dice1Output+dice2Output);
console.log("The sum of " + dice1Output + " and " + dice2Output + " is: " + addResult);