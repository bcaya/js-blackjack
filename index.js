let firstCard = 5 
let secondCard = 6 
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard   
let hasBlackjack = false
let isAlive = true
let message = "" //initialize blank message as placeholder 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame(){
  renderGame()
}

function renderGame(){
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] 
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

function newCard(){
  let thirdCard = 7
  sum += thirdCard 
  renderGame()
}