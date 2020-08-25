// Code your solutions in this file
let cards = []
function writeCards(array, string){
  for(let i = 0; i < array.length; i++){
    cards.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
  }
return cards
}


function countDown(integer){
  for (let i = integer; i >= 0; i--){
    console.log(i)
  }
}
