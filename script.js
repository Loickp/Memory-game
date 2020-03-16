var cardOpen = []
var cardMatch = []

var cards_list = ['card-1', 'card-1', 'card-2', 'card-2', 'card-3', 'card-3']
var idx_list = []
var max = 6
var counter = 0

function shuffle(array){
    var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

function board(){
    var table = document.getElementById('game')
    var card_shuffle = shuffle(cards_list);

    for(var i = 0; i < 6; i++){
        var td = document.createElement('td')
        var img = document.createElement('img')

        if(!(i % 3)){
            var tr = document.createElement('tr')
            table.appendChild(tr)
        }

        img.src = "card.png"
        img.setAttribute('class', 'card-class')
        img.setAttribute('id', card_shuffle[i])

        tr.appendChild(td)
        td.appendChild(img)  
    }
}

board()

var cards = document.querySelectorAll('.card-class');
console.log(cards)

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

        /*cards.forEach(cards => {
            cards.src = "card.png"
        })*/
    }
}