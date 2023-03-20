var player;
function preload(){

}
function setup() {
    createCanvas(600,600);

    player = createSprite(300,300,15,15);
}

function draw() {
    background("skyblue");
    //códigos que serão executados ao longo de todo o jogo
if(keyDown("up")){
player.y -=3
}
if(keyDown("down")) {
player.y +=3
}
if(keyDown("left")){
player.x -=3
}
if(keyDown("right")){
player.x +=3
}
drawSprites();
}

