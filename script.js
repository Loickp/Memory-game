var idx_list = []
var counter = 0
var max = 10
var cartes = ['image1', 'image1', 'image2', 'image2', 'image3', 'image3', 'image4', 'image4', 'image5', 'image5', 'image5', 'image5'];


for(var i=0; i < 3; i++){
    var game = document.getElementById('game');
    var row = document.createElement('div');

    row.setAttribute("class", "row");
    game.appendChild(row);

    for(var j=0; j < 6; j++){
        var col = document.createElement('div');
        var img = document.createElement('img');

        col.setAttribute("class", "col");
        row.appendChild(col);

        img.src = "card.png"
        col.appendChild(img);
    }
}