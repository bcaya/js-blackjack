let firstCard = 5 
let secondCard = 6 
let sum = firstCard + secondCard + 13   
let hasBlackjack = false
let isAlive = true
let message = "" //initialize blank message as placeholder 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard 
  sumEl.textContent = "Sum is: " + sum
  if(sum <= 20){
    message = "Do you want a new card?"
  }else if(sum === 21){
    message = "You got Blackjack!"
    hasBlackjack = true 
  }else{
    message = "You're out of the game!"
    isAlive = false
  }

  messageEl.textContent = message 
}

