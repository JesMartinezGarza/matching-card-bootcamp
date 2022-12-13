let fullDeckOfKinks = ["Ray","Mick","Pete","Dave","Kinks"];

deckAtPlayPrime = [];

window.onload = shuffleCards(), createCardsOnBoard()  

function shuffleCards(){
    deckAtPlay = fullDeckOfKinks.concat(fullDeckOfKinks);

    for(let i = 0; i < deckAtPlay.length; i++){
        let j = Math.floor(Math.random() * deckAtPlay.length);
        let temp = deckAtPlay[i];
        deckAtPlay[i] = deckAtPlay[j];
        deckAtPlay[j] = temp;
    }
    deckAtPlayPrime = deckAtPlay
    console.log('Shuffled Deck: ' + deckAtPlayPrime);
}

function createCardsOnBoard(){
    for(let i = 0; i < deckAtPlayPrime.length; i++){
        let card = document.createElement('img')
        // let source = './img/' + deckAtPlayPrime[i] + '.jpeg'
        let source = './img/Psychedelic.jpeg'

        card.setAttribute('src', source)
        
        if(i < 5){
            card.setAttribute('id', deckAtPlayPrime[i] + i)
            document.querySelector('#board').appendChild(card)
        }else

        card.setAttribute('id', deckAtPlayPrime[i] + (i - fullDeckOfKinks.length))
        document.querySelector('#board').appendChild(card)
    }
}

let firstSelection;
let secondSelection;


document.querySelectorAll('img').forEach(item => {

    item.addEventListener('click', event => {
      console.log(event.target.id)
      console.log(event.target.src)

      let idWithoutNumber = ''
      for(let i = 0; i < event.target.id.length - 1; i++){
        idWithoutNumber += event.target.id.charAt(i)
      }

      if(firstSelection === undefined){
        firstSelection = event.target

        console.log(event.target)
        console.log(firstSelection.id)
        event.target.setAttribute('src', `./img/${idWithoutNumber}.jpeg`)

      }else if(secondSelection === undefined){
        secondSelection = event.target

        console.log(event.target)
        console.log(secondSelection.id)
        event.target.setAttribute('src', `./img/${idWithoutNumber}.jpeg`)

        setTimeout(function() {
            if(firstSelection.src === secondSelection.src){
                // alert('Card match! Try again.')
                firstSelection = undefined
                secondSelection = undefined
            }else
                // alert('Cards do not match! Try again.')
                firstSelection.setAttribute('src', `./img/Psychedelic.jpeg`)
                secondSelection.setAttribute('src', `./img/Psychedelic.jpeg`)
                firstSelection = undefined
                secondSelection = undefined
            }, 1500)
      }

    })

})

// let arrayOfSources = []

// document.querySelectorAll('img').forEach(item => {
//     arrayOfSources.push(item.src)
// })
// console.log(arrayOfSources)