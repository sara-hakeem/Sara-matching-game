# Memory Game Project

## Table of Contents
* game description
* list of code dependencies 





## game description
This game of memory is done every time to arrange pictures randomly and after the time is displayed to solve the puzzle and the number of stars you got and asked if you like to play again or not if you want to play will start again
The game displays the number of clicks you have made
Stars are smaller as the number of clicks increases
There is a reloading of the game if you want to run it again.

## list of code dependencies 
1-make design whith js code  then add to him events 
2-In order to use TIMER you must download this library and
    Include this code in the html file
      <script src="js/easytimer.min.js"> </script>
3-to make animations must download animate.css-master file then make items you want to animate with class 
 class= "animated infinite tada"
4-to Arrange images randomly pass array of image to this functio
      function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


