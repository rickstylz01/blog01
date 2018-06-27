/*  PLANNING A PROJECT:
-----------------------------------------------
1. What do you want to make?:
-----------------------------------------------

Create your own plan, or try the following:

1. Create a random number function that generates a random number within a certain range.  Introduce more randomness in the game using the function.

2. Generate a random scenario for the beginning or ending (maybe by using a switch statement that uses a random number as the parameter, and alerts a different scenario for each case, depending on the random number)

3. Create your own adventure game, pulling from the code we have written as a guide.

-----------------------------------------------
2. What steps do you think are necessary?
-----------------------------------------------

> create variables to hold arrays or weapons or scenarios.

> create a function to cycle through arrays.

> set up scenarios with prompts, alerts, or even confirms.

-----------------------------------------------
3. What syntax or coding patterns might you use?
-----------------------------------------------
I will use alert's/prompt's/confirm's to create the scenario.
I will use array's to hold weapons and scenario's.

-----------------------------------------------
Remember: There are many ways to create things with code! The most important part is to write it and get it working.  If you can't get something to work, try making it simpler.  
After, look for ways you might improve your code! 
*/


alert("You were sentenced to life in jail today.  You're being transported to a prison when all of a sudden, distracted by the conversation the officer driving was having with you, the car hit's someone.  He rushes out of the car to investigate");
alert("After about 20 min. the officer hasn't returned yet.");
var decision = prompt("Confused about the situation, you see this as an oppertunity to escape. Do you try to leave the car or wait for the officer to return?");

function randomNumber(range){
	return Math.round( Math.random() * range );
}

var weaponList = ["you're shoe", "courage", "a nightstick in the front seat"];

var weapon = weaponList[ randomNumber( weaponList.length - 1) ];
//After a few minutes I discovered that, placing this if/else statement after setting up my variables and functions,
switch(decision) {
case "wait":
	alert("The officer finally returns but something about his demeanor seems odd... Frantically, you search for a weapon to defend yourself and find " + weapon + ", and prepare yourself for whatever happens.");
case "wait":
	alert("The officer lunges at you and you defend yourself!");
	break;
case "leave":
	alert("You escaped from the car! But as you were fleeing you heard a gut wrenching scream.");
	break;
}

var locations = ["you're home", "the nearest town", "the closest gas station"];
var destination = locations[ randomNumber( locations.length - 1) ];
var survival = randomNumber(2);

if(survival === 0){
	alert("The officer bit you! Game over.");
} 
else if(survival > 0){
	alert("You killed the officer and are now free. You decide to go to " + destination + ".");
}




