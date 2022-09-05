
var victorias = parseInt(prompt("Informe la cantidad de victorias"));
var empates = parseInt(prompt("Informe la cantidad de empates"));

var puntosTotal = (victorias * 3) + empates;
document.write("El total de puntos del equipo es: " + puntosTotal + "   ");

if (puntosTotal > 28) { 
    document.write (document.getElementById("mejor").style.color=("green"));
    }
if (puntosTotal < 28) { 	
    document.write (document.getElementById("peor").style.color=("red")) ;
    }
if (puntosTotal == 28) { 
    document.write (document.getElementById("igual").style.color=("blue"));
    }