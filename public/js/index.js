const animate = window.requestAnimationFrame;

const GAME_HEIGHT = 600;
const GAME_WIDTH = 800;

let canvas, ctx;
let red = 50;


document.addEventListener("DOMContentLoaded", function(){
    setup();
    animate(draw);
})

function draw(){
    clearWindow();
    background();
    animate(draw);
}

function setup(){
    canvas = document.querySelector('canvas');
    ctx = canvas.getContext('2d');

}

function background(){
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT)
}

function clearWindow(){
    ctx.clearRect(0, 0, GAME_HEIGHT, GAME_HEIGHT);
}

