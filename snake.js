 alert("bienvenido");
document.addEventListener("keydown", moverCuadro);

var cuadro = document.getElementById("cuadro");
var boton = document.getElementById("reiniciar");

 boton.addEventListener("click", reiniciar);

var posicionInicialX = 0;
var posicionInicialY = 0;
var movimiento = 45;
function moverCuadro (evento) {
    switch(evento.keyCode){
        case 38 :
        posicionInicialY = posicionInicialY-movimiento;
        if (posicionInicialY<0){
            finDelJuego();
        }

        else{
            cuadro.style.marginTop = posicionInicialY+"px";
        }
        break;

        case 40 :
        posicionInicialY = posicionInicialY + movimiento;
        if(posicionInicialY>270){
            finDelJuego();
        }

        case 37:
         posicionInicialX = posicionInicialX - movimiento;
         if (posicionInicialX<0) {
            finDelJuego();
        }
        else {
            cuadro.style.marginLeft = posicionInicialX+ "px";
         }
        break;
        case 39:
        posicionInicialX = posicionInicialX + movimiento;
        if (posicionInicialX>270) {
            finDelJuego();
        }
        else {
            cuadro.style.marginLeft = posicionInicialX+ "px";
        }

         break;
         default:
         alert("otra tecla");
         break;
        }
    }
    function finDeljuego(){
        alert("perdiste");
        document.removeEventListener("keydown" , moverCuadro);
    }
    function reiniciar(){
        posicionInicialX = 0;
        posicionInicialY = 0;
        cuadro.style.marginTop = posicionInicialY;
        cuadro.style.marginLeft = posicionInicialX;
        document.addEventListener("keydown" , moverCuadro);
    }
    




// var posicionInicialx ="200";
// var posicionInicialy ="200";
// var contenedor = document.getElementById("contenedor").value;
// var cabezaSerpiente = document.getElementById("cabezaSerpiente");
// var avanzarx =
// var avanzary =
// var teclas = {
//     UP:38;
//     DOWN : 50;
//     LEFT : 40;
//     RIGHT : 34
