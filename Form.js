class Form
{
    constructor()
    {

    }
    display()
    {
        var title = createElement('h1');
        title.html("CAR RACER GAME");
        title.position(500,20);

        var input = createInput("name");
        input.position(560,160);

        var button = createButton('play');
        button.position(620,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            playerCount+= 1;
            player.update(name);
            player.updateCount(playerCount);

            var greeting = createElement('h2');
            greeting.html("Welcome To Car Racer Game "+name);
            greeting.position(480,160);
        })
    }
}