import CL_Personas from "./CL_Personas.js";
import CL_Procesos from "./CL_Procesos.js";

let perso1 = new CL_Personas("Luis", 15, "M");
let perso2 = new CL_Personas("Ana", 19, "F");
let perso3 = new CL_Personas("Jose", 21, "M");
let perso4 = new CL_Personas("Carmen", 17, "F");
let perso5 = new CL_Personas("Rosa", 18, "F");
let perso6 = new CL_Personas("Jose", 22, "M");
let perso7 = new CL_Personas("Maria", 17, "F");
let perso8 = new CL_Personas("Luz", 19, "F");
let perso9 = new CL_Personas("Rafael", 23, "M");
let perso10 = new CL_Personas("Liz", 15, "F");
let perso11 = new CL_Personas("Marcos", 20, "M");
let perso12 = new CL_Personas("Leo", 16, "M");

let procesos = new CL_Procesos();
procesos.procesarPersonas(perso1);
procesos.procesarPersonas(perso2);
procesos.procesarPersonas(perso3);
procesos.procesarPersonas(perso4);
procesos.procesarPersonas(perso5);
procesos.procesarPersonas(perso6);
procesos.procesarPersonas(perso7);
procesos.procesarPersonas(perso8);
procesos.procesarPersonas(perso9);
procesos.procesarPersonas(perso10);
procesos.procesarPersonas(perso11);
procesos.procesarPersonas(perso12);

let salida = document.getElementById("salida");

salida.innerHTML = "RESULTADOS";
salida.innerHTML += "<br> Edad promedio: " +procesos.calcularEdadPromedio();
salida.innerHTML += "<br> Edad mayor entre las mujeres: " +procesos.mostrarEdadMMujeres();