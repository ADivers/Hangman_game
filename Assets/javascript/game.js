	
// Variables*********************************

var words = ["cosmic", "astronaut", "astronomy", "gravity", "telescope", "neptune", "galaxy", "planet", "asteroid"]

var numguesses = 0;

var guesses = [];

var guess;

var counter ;

var score = 0;

var letterpicks = [];

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'];

var currentWord = words[Math.floor(Math.random() * words.length)];

var messages = {
            win: 'You win!',
            lose: 'Game over!',
            guessed: ' already guessed, please try again...',
            validLetter: 'Please enter a letter from A-Z'
        };

var badpicks = [];



// Functions*********************************


function letterlength() {
document.querySelector("#letterlengthid").innerHTML = "The word is "+ currentWord.length +" characters long";
}

function guessesleft() {
document.querySelector("#guessesleftid").innerHTML = "You have " + ((currentWord.length +2) - numguesses) + " guesses left";
}

function badletterpicks() {
document.querySelector("#badpicksid").innerHTML = "Incorrect Guesses: " + badpicks;
}

// 
function check () {
	for (var i = 0; i < currentWord.length; i++) {
		if (currentWord[i] === guess){
			letterpicks[i].innerHTML = guess;
			counter += 1;
		}
	}
}

// Create geusses ul
  function result () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < currentWord.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      
      if (currentWord[i] === "-") {
        guess.innerHTML = "-";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      letterpicks.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
// function killguess () {
// 	if (guesses >= 0) {
// 		var parent = document.getElementById("my-word");
// 		var child = document.getElementById("guess");
// 		parent.removeChild(child);
// 	}
// }


  // Create geusses ul
  //  result = function () {
  //   wordHolder = document.getElementById('hold');
  //   correct = document.createElement('ul');

  //   for (var i = 0; i < word.length; i++) {
  //     correct.setAttribute('id', 'my-word');
  //     guess = document.createElement('li');
  //     guess.setAttribute('class', 'guess');
  //     if (word[i] === "-") {
  //       guess.innerHTML = "-";
  //       space = 1;
  //     } else {
  //       guess.innerHTML = "_";
  //     }

  //     geusses.push(guess);
  //     wordHolder.appendChild(correct);
  //     correct.appendChild(guess);
  //   }
  // }


// Main process******************************
 
	console.log(currentWord);
	 currentWord = currentWord.replace(/\s/g, "-");
	console.log(currentWord);
// Display a word
// console.log(currentWord);

//display word length
	console.log("The word is "+ currentWord.length +" characters long");
	letterlength();
	guessesleft();
// result();
// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
	document.onkeyup = function(event) {

// Captures the key press, converts it to lowercase, and saves it to a variable.
	var letter = String.fromCharCode(event.keyCode).toLowerCase();
	guess = letter; 

// Alert if non letter is pressed
	console.log (letter) ;

	var badguess = alphabet.indexOf(letter);
	if (badguess === -1) {
	alert ("Not a Letter, try again")
	}
 // add guess number
    	numguesses++;
	    console.log(numguesses);
	    guessesleft();

// Determine if letter pressed is in currentWord (t/f)


//if letter is in word then push to array 
 if (currentWord.includes(letter)) {
 	letterpicks.push(letter)
 } else {
 	badpicks.push(letter);
 };

 	console.log (letterpicks);
 	// letterpicksfun ();
 	
 	// killguess ();

 	//run check function
	check ();
//alert GAME OVER
 if (numguesses >= (currentWord.length + 2)){
 	alert (messages.lose);
 }

if (letterpicks.length === currentWord.length){
	alert (messages.win) ;
}
//function to show bad picks
badletterpicks();

//function to display word
result ();

}

