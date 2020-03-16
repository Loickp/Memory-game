var cardOpen = []
var cardMatch = []
var cards_list = [
    {id: 'AH', src: 'cards/AH.png'},
    {id: '2H', src: 'cards/2H.png'},
    {id: '3H', src: 'cards/3H.png'},
    {id: 'AH', src: 'cards/AH.png'},
    {id: '2H', src: 'cards/2H.png'},
    {id: '3H', src: 'cards/3H.png'}
]

function shuffle(array){
    var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// Boucle pour chaque elements de la liste
	while (currentIndex !== 0) {
		// Prend un element au hazard
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
    var cards = document.querySelectorAll('.card-class');
    var card_shuffle = shuffle(cards_list);
    console.log(card_shuffle)

    for(var i = 0; i < 6; i++){
        var td = document.createElement('td')
        var img = document.createElement('img')

        if(!(i % 3)){
            var tr = document.createElement('tr')
            table.appendChild(tr)
        }

        img.src = "cards/card.png"
        img.setAttribute('class', 'card-class')
        img.setAttribute('id', card_shuffle[i].id)

        tr.appendChild(td)
        td.appendChild(img)
    }
}

board()

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

    var crd = cards_list.filter(cards =>{
        return cards.id == card.id
    })

    card.src = crd[0].src

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
            cardOpen[0].src = "cards/card.png"
            cardOpen[1].src = "cards/card.png"
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