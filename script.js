var idx_list = []
var counter = 0
var max = 10
var cartes = ['image1', 'image1', 'image2', 'image2', 'image3', 'image3', 'image4', 'image4', 'image5', 'image5', 'image5', 'image5'];


/*for(var i=0; i < 2; i++){
    var game = document.getElementById('game');
    var row = document.createElement('div');

    row.setAttribute("class", "row");
    game.appendChild(row);

    for(var j=0; j < 3; j++){
        var col = document.createElement('div');
        var img_1 = document.createElement('img');
        var img_2 = document.createElement('img');

        col.setAttribute("class", "col card");
        row.appendChild(col);

        img_1.src = "card-front.png"
        img_1.setAttribute("class", "front");

        img_2.src = "card.png"
        img_2.setAttribute("class", "back");

        col.appendChild(img_1);
        col.appendChild(img_2);
    }
}*/

var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});
