var allCards = document.querySelectorAll(".cards");
var firstFlipped = false;
var secondFlipped = false;
var cardOne, cardOneValue;
var cardTwo, cardTwoValue;
var allSources = ["1clubs.png", "1hearts.png", "2clubs.png", "2hearts.png", "3clubs.png", "3hearts.png"];
var timeoutVar, timeoutVar2, timeoutVar3;




function flip(){
    if(!secondFlipped){
        this.classList.add('flipped');
    }
  

    if (firstFlipped && !secondFlipped && this!= cardOne){ //second card flip, makes sure you don't flip a card twice
        cardTwo = this;
        cardTwoValue = (this.querySelector(".front").getAttribute("src")).substring(0,1);
        secondFlipped = true;

    
    }
    else if(!firstFlipped && !secondFlipped){ //first card flip
        cardOne = this;
        cardOneValue = (this.querySelector(".front").getAttribute("src")).substring(0,1);
        firstFlipped = true;

    }


    if(cardOneValue == cardTwoValue){ //if they're equal, hide both
        cardOneValue = 0;
        cardTwoValue = -1;
        
        timeoutVar = setTimeout(makeHidden, 1500);
            
        
    }
    
  
    else if(cardOneValue != cardTwoValue && (firstFlipped && secondFlipped)){ //if they're both flipped and not equal, flip back over
        timeoutVar2 = setTimeout(showBacks2, 1500);
        cardOneValue = 0;
        cardTwoValue = -1;
       
    }
    else if(cardOneValue != cardTwoValue && firstFlipped && !secondFlipped){ //card one is flipped but card two isn't, card one flips back over after 1.5sec
        timeoutVar3 = setTimeout(function() {
            if(!secondFlipped){
               showBacks1();  
               cardOneValue = 0;   
               cardTwoValue = -1;
            }
        }, 1500);

    }
}



function makeHidden(){ //hides both cards
    cardOne.classList.add('remove');
    cardTwo.classList.add('remove');

    cardOne.removeEventListener('click', flip, false);
    cardTwo.removeEventListener('click', flip, false);

    firstFlipped = false;
    secondFlipped = false;
    if(timeoutVar){
        clearTimeout(timeoutVar);
    }
    if(timeoutVar2){
        clearTimeout(timeoutVar2);
    }
    if(timeoutVar3){
        clearTimeout(timeoutVar3);
    }



}


function showBacks1(){ //flips first card back over
    cardOne.classList.remove('flipped');
    firstFlipped = false;
    

}

function showBacks2(){ //flips second card back over
    cardOne.classList.remove('flipped');
    cardTwo.classList.remove('flipped');
    firstFlipped = false;
    secondFlipped = false;
    if(timeoutVar){
        clearTimeout(timeoutVar);
    }
    if(timeoutVar2){
        clearTimeout(timeoutVar2);
    }
    if(timeoutVar3){
        clearTimeout(timeoutVar3);
    }

}

function getRandomInt(max) { //copied from mozilla website per instructions
    return Math.floor(Math.random() * Math.floor(max));
  }

function reset(){
   
    for(let i = 0; i<allCards.length; i++){ //if a card is hidden, add the event listener back
        allCards[i].classList.contains('remove');
        allCards[i].addEventListener("click", flip, false);
    }

    for(let i = 0; i<allCards.length; i++){ //remove all classes and only add the class 'cards'
        var currentCard = allCards[i];
        currentCard.className = "";
        currentCard.classList.add('cards');

    }
    shuffle(); 

    cardOneValue = 0;
    cardTwoValue = -1;

    if(timeoutVar){
        clearTimeout(timeoutVar);
    }
    if(timeoutVar2){
        clearTimeout(timeoutVar2);
    }
    if(timeoutVar3){
        clearTimeout(timeoutVar3);
    }
    

    firstFlipped = false;
    secondFlipped = false;
   

    
}

function shuffle(){
    //shuffle array of sources first using fisher-yates type shuffle
    var x, y;
    for(let i = 0; i< allSources.length; i++){
        x = getRandomInt(5);
        y = allSources[i];
        allSources[i] = allSources[x];
        allSources[x] = y;
    }

    //assign shuffled sources to cards
    for(let i = 0; i<allCards.length; i++){
        var currentCard = allCards[i].querySelector(".front")
        currentCard.src = allSources[i];
     

    }

}

//event listeners
for(let i = 0; i<allCards.length; i++){
    allCards[i].addEventListener("click", flip, false);
}

document.getElementById("restartButton").addEventListener("click", reset, false);
document.addEventListener("DOMContentLoaded", reset, false);



