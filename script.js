var counter = 0
var cardOpen = []
var cardMatch = []
var cards_list_6 = [
    {id: 'AH', src: 'cards/AH.png'},
    {id: '2H', src: 'cards/2H.png'},
    {id: '3H', src: 'cards/3H.png'},
    {id: 'AH', src: 'cards/AH.png'},
    {id: '2H', src: 'cards/2H.png'},
    {id: '3H', src: 'cards/3H.png'}
]
var cards_list_18 = [
    {id: 'AH', src: 'cards/AH.png'},
    {id: '2H', src: 'cards/2H.png'},
    {id: '3H', src: 'cards/3H.png'},
    {id: '4H', src: 'cards/4H.png'},
    {id: '5H', src: 'cards/5H.png'},
    {id: '6H', src: 'cards/6H.png'},
    {id: '7H', src: 'cards/7H.png'},
    {id: '8H', src: 'cards/8H.png'},
    {id: '9H', src: 'cards/9H.png'},
    {id: 'AH', src: 'cards/AH.png'},
    {id: '2H', src: 'cards/2H.png'},
    {id: '3H', src: 'cards/3H.png'},
    {id: '4H', src: 'cards/4H.png'},
    {id: '5H', src: 'cards/5H.png'},
    {id: '6H', src: 'cards/6H.png'},
    {id: '7H', src: 'cards/7H.png'},
    {id: '8H', src: 'cards/8H.png'},
    {id: '9H', src: 'cards/9H.png'}
]

// 6 cartes : 3/2
// 18 cartes : 6/3

function startGame(mode){
    var value = mode.value
    var btn = document.getElementById('mode')

    if(value == "6cards"){
        board(cards_list_6, 6, 3)
        btn.style.display = "none";
    }
    else{
        board(cards_list_18, 18, 6)
        btn.style.display = "none";
    }
}

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

function board(cards_list, nb_card, column){
    var table = document.getElementById('game')
    var card_shuffle = shuffle(cards_list);

    for(var i = 0; i < nb_card; i++){
        var td = document.createElement('td')
        var img = document.createElement('img')

        if(!(i % column)){
            var tr = document.createElement('tr')
            table.appendChild(tr)
        }

        img.src = "cards/card.png"
        img.setAttribute('class', 'card-class')
        img.setAttribute('id', card_shuffle[i].id)

        tr.appendChild(td)
        td.appendChild(img)
    }

    var cards = document.querySelectorAll('.card-class');

    cards.forEach(cards => {
        cards.addEventListener('click', function(){
            flipCard(this, cards_list);
            this.classList.add('disable')
            checkEnd(cards_list)
        })
    });
}

function flipCard(card, cards_list){
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
    var cards = document.querySelectorAll('.card-class');

    cards.forEach(cards => {
        cards.classList.remove('disable')
        for(var i = 0; i < cardMatch.length; i++){
            cardMatch[i].classList.add('disable')
        }
    })
}

function disable(){
    var cards = document.querySelectorAll('.card-class');

    cards.forEach(cards => {
        cards.classList.add('disable')
    })
}

function checkEnd(cards_list){
    if(cardMatch.length == cards_list.length){
        console.log("You win !")
    }
}