var idx_list = []
var counter = 0
var max = 10
var cartes = ['image1', 'image1', 'image2', 'image2', 'image3', 'image3'];

function board(){
    for(var i = 0; i < 6; i++){
        var td = document.createElement('td');
        var div = document.createElement('div');
        var img_back = document.createElement('img');
        var img_front = document.createElement('img');
        var idx = Math.floor(Math.random() * 6);

        while (idx_list.includes(idx)) { // Boucle while qui vérifie si il y à un doublon
            counter++
            idx = Math.floor(Math.random() * 6);
            if (counter === max) { // Permet d'éviter une boucle infini
                break;
            }
        }
        idx_list.push(idx)

        if (!(i % 3)) {
            tr = document.createElement('tr');
            document.getElementById('card_table').appendChild(tr);
        }
        td.appendChild(document.createTextNode(cartes[idx]));

        div.setAttribute("class", "memory-card");
        div.setAttribute('onclick', 'flipCard()')

        //img.src = "img-" + idx + ".png";
        img_back.setAttribute("id", cartes[idx]);
        img_back.setAttribute("class", "img-back");
        img_back.src = "card.png";
        img_back.setAttribute("onclick", "check(this);");

        img_front.setAttribute("class", "img-front");
        img_front.src = "card-front.png";

        td.appendChild(div);
        div.appendChild(img_back);
        div.appendChild(img_front);
        tr.appendChild(td);
    }
}

function check(card){
    console.log(card.id);
}

function flipCard(){
    //this.classList.toggle('flip');
    console.log("flip");
}

board();
