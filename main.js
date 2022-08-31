var canvas = document.getElementById("canvas").getContext("2d");
var tamanhoTelaX = 1280;
var tamanhoTelaY = 720;
var Player1 = new player(50,260, 30, 200, "White");
var Player2 = new player(tamanhoTelaX-80, 260, 30, 200, "white")
var Ball = new ball(tamanhoTelaX/2 - 15, tamanhoTelaY/2 - 15, 30, 30, "white")
var score1 = new text();
var score2 = new text();
var point1 = 0;
var point2 = 0;


document.addEventListener("keydown", function(event){
    if( event.key === "s")
    {
        Player1.move("s");
    }
    else if (event.key === "w")
    {
        Player1.move("w");
    }
    else if( event.key === "i")
        {
            Player2.move("i");
        }
    else if( event.key === "k")
        {
            Player2.move("k");
        }
})
function draw()
{
    Player1.draw();
    Player2.draw();
    Ball.draw();
    score1.draw( "score 1: " + point1,20, 40, "white");
    score2.draw( "score 2: " + point2,tamanhoTelaX - 160, 40, "white");
    
}

function update()
{
    Ball.move();
    Player1.move();
    Player2.move();
}


function main()
{
    canvas.clearRect(0,0,tamanhoTelaX, tamanhoTelaY);
    update();
    draw();
    


}

setInterval(main, 20);