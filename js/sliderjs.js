var arrayImagenes = ["img slider/bulbasaur.gif","img slider/ivysaur.gif","img slider/venusaur.gif",
    "img slider/charmander.gif","img slider/charmeleon.gif","img slider/charizard.gif","img slider/squirtle.gif"
,"img slider/wartortle.gif","img slider/blastoise.gif"];
var indice = 0;
var imagenVariable = document.getElementById('sprite');
var time = setInterval(auto, 3000);
document.getElementById("boton0").checked = true;

function auto(){
    indice++;
    if(indice > arrayImagenes.length -1){
        indice = 0;
    }
    document.getElementById("boton"+indice).checked = true;
    imagenVariable.src = arrayImagenes[indice];
}

function mover(numImagen){
    clearInterval(time);
    switch(numImagen){
        case "der":
            indice++;
            break;
        case "izq":
            indice--;
            break;
        default:
            indice = numImagen;
            break;
    }
    if(indice > arrayImagenes.length -1){
        indice = 0;
    }
    if(indice < 0){
        indice = arrayImagenes.length -1;
    }
    document.getElementById("boton"+indice).checked = true;
    imagenVariable.src = arrayImagenes[indice];
    time = setInterval(auto, 3000);
}