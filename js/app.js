//VARIABLES
let time_ES = new Date();
let deltaTime_ES = 0;

let sueloY_ES = 22;
let velY_ES = 0;

let impulso_ES = 900;

let gravedad_ES = 2500; 

let dinoPosX_ES = 42;

let dinoPosY_ES = sueloY_ES;

let sueloX_ES = 0;
let velEscensario_ES = 1200/3;

let gameVel_ES = 1;

let score_ES = 0;

let parado_ES = false;
let saltando_ES = false;

let contenedor_ES;
let dino_ES;
let textoScore_ES;
let suelo_ES;

let gameOver_ES;

//FUNCIONES
const Init = ()=>
{
    time_ES = new Date();
    start();
    loop();
}


if(document.readyState === "complete" || document.readyState === "interactive")
{
    setTimeout(Init, 1);
}

else
{
    document.addEventListener("DOMContentLoaded", Init);
}


const loop = ()=>
{
    deltaTime_ES = (new Date() - time_ES) / 1000;
    time_ES = new Date();
    update();
    requestAnimationFrame(loop);
}

const start = ()=>
{
    gameOver_ES = document.querySelector(".game-over");
    suelo_ES = document.querySelector(".suelo");
    
    contenedor_ES = document.querySelector(".contenedor");
    
    textoScore_ES = document.querySelector(".score");
    dino_ES = document.querySelector(".dino");
}

const update = ()=>
{
    moverSuelo();
}

const moverSuelo = ()=>
{
    suelo_ES += calcularDesplazamiento();
    
    suelo_ES.style.left = - (sueloX_ES % contenedor_ES.clientWidth) + "px";
}

const calcularDesplazamiento = ()=>
{
    return velEscensario_ES * deltaTime_ES * gameVel_ES;
}

//EVENTOS