let firstCard = 5 
let secondCard = 6 
let sum = firstCard + secondCard + 13   
let hasBlackjack = false
let isAlive = true
let message = "" //initialize blank message as placeholder 

if(sum <= 20){
  message = "Do you want a new card?"
}else if(sum === 21){
  message = "Woohoo! You got Blackjack!"
  hasBlackjack = true 
}else{
  message = "You're out of the game!"
  isAlive = false
}

console.log(message)