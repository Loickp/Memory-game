var cardOpen = []
var cardMatch = []

var cards = document.querySelectorAll('.card-class');

cards.forEach(cards => {
    cards.addEventListener('click', function(){
        flipCard(this);
        this.classList.add('disable')
        checkEnd()
    })
});

function flipCard(card){
    cardOpen.push(card)
    card.src = 'card-front.png'

    if(cardOpen.length == 2){
        disable()
        check()
    }
}

function check(){
    if(cardOpen[0].id == cardOpen[1].id){
        console.log('match !')
        cardMatch.push(cardOpen[0])
        cardMatch.push(cardOpen[1])
        setTimeout(function(){
            cardOpen = []
            enable()
        },1000);
    }
    else{
        setTimeout(function(){
            cardOpen[0].src = "card.png"
            cardOpen[1].src = "card.png"
            cardOpen = []
            enable()
        },1000);
    }
}

function enable(){
    cards.forEach(cards => {
        cards.classList.remove('disable')
        for(var i = 0; i < cardMatch.length; i++){
            cardMatch[i].classList.add('disable')
        }
    })
}

function disable(){
    cards.forEach(cards => {
        cards.classList.add('disable')
    })
}

function checkEnd(){
    if(cardMatch.length == 6){
        console.log("You win !")
    }
}