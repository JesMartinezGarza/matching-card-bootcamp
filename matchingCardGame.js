let fullDeckOfKinks = ["Ray","Mick","Pete","Dave","Kinks"];

let deckAtPlay;
let board = [];
let rows = 2;
let columns = 5;

let firstCard;
let secondCard;

window.onload = function(){
    shuffleCards();
    startGame();
}

function shuffleCards(){
    deckAtPlay = fullDeckOfKinks.concat(fullDeckOfKinks);
    console.log(deckAtPlay);

    for(let i = 0; i < deckAtPlay.length; i++){
        let j = Math.floor(Math.random() * deckAtPlay.length);
        let temp = deckAtPlay[i];
        deckAtPlay[i] = deckAtPlay[j];
        deckAtPlay[j] = temp;
    }
    console.log(deckAtPlay);
}

function startGame(){
    for(let r = 0; r < rows; r++){
        let row = [];
        for(let c = 0; c < columns; c++){
            let cardImg = deckAtPlay.pop();
            row.push(cardImg);

            let card = document.createElement('img');
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".jpeg"
            card.classList.add("card");
            card.addEventListener("click", selectCard)
            document.getElementById("board").append(card);
        }
        board.push(row);
    }
    console.log(board);
    setTimeout(hideCards, 1000);
}

function hideCards(){
    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "Psychedelic.jpeg";
        }
    }
}

function selectCard(){

    if(this.src.includes("Psychedelic")){
        if(!firstCard){
            firstCard = this;

            let coords = firstCard.id.split('-');
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            firstCard.src = board[r][c] + ".jpeg";
  }
        else if(!secondCard && this != firstCard){
            secondCard = this;

            let coords = secondCard.id.split("-");
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            secondCard.src = board[r][c] + ".jpeg";
            setTimeout(update, 1000);
        }
    }
}

function update(){
    if(firstCard.src != secondCard.src){
        firstCard.src = "Psychedelic.jpeg"
        secondCard.src = "Psychedelic.jpeg"
    }

    firstCard = null; 
    secondCard = null;

}