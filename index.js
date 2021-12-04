
let cards = []
let sum = 0  
let hasBlackjack = false
let isAlive = false 
let message = "" //initialize blank message as placeholder 
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

console.log(cards)

function getRandomCard(){
  let randomCard = Math.floor(Math.random()* 13) + 1
  if( randomCard > 10){
    return 10
  }else if(randomCard === 1){
    return 11
  }else{
    return randomCard
  }
  
}

function startGame(){
  isAlive = true
  let firstCard = getRandomCard() 
  let secondCard = getRandomCard()
  sum = firstCard + secondCard
  cards = [firstCard, secondCard]

  renderGame()
}

function renderGame(){
  cardsEl.textContent = "Cards: "
  for(let i = 0; i < cards.length; i++){
    cardsEl.textContent += cards[i] + " "
  } 
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
  if(isAlive === true && hasBlackjack === false){
  let card = getRandomCard()
  sum += card 
  cards.push(card)
  console.log(cards)
  renderGame()
  }
}