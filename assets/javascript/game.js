//alert('You have 10 guesses')
//alert('GO!!')

var directionsText = document.getElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");



var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var userGuess;
var compGuess;
var wins = 0;
var losses = 0;
var guesses = 10;
index = Math.floor(Math.random() * alphabet.length+1);


 document.onkeydown = function (press) {


    userGuess = press.key;
    console.log(userGuess)  
    
    
    compGuess = alphabet[index]
    console.log(compGuess)
    
    
    // console.log(index)  --- logs number in array


    // Randomly chooses a choice from the options array. This is the Computer's guess.
    // var compLetter = compOptions[(alphabet.random() * computerOptions.length)];

    // Create variables that hold references to the places in the HTML where we want to display things.



    if (userGuess === compGuess) {
        alert("WINNER WINNER CHICKEN DINNER!!");
        wins++;
        index = Math.floor(Math.random() * alphabet.length +1);
        message.textContent =  ("-----------------Got it!!!-----------------")
        directionsText.textContent = (" ");
       
       
    } else {
        losses++;
        guesses--;
        message.textContent = ("Wroooong!!!")
        directionsText.textContent = (" ");
        

        
    }







    // Hide the directions
    

    // Display the user and computer guesses, and wins/losses/ties.
    userChoiceText.textContent = "Your guess: " + userGuess;
    computerChoiceText.textContent = "Computer Letter ??????";
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
  




}




