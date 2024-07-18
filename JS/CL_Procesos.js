import CL_Personas from "./CL_Personas.js";
export default class CL_Procesos {
    constructor(){
        this.contTodo = 0;
        this.acumEdad = 0;
        this.mayor = 0;
    }

    procesarPersonas(personas){

        //CONTADOR DE MUJERES

        this.contTodo = this.contTodo + 1

        //EDAD MAYOR ENTRE LAS MUJERES

        if(personas.edad > this.mayor && personas.sexo == "F"){
            this.mayor = personas.edad;
        }

        //ACUMULAR LAS EDADES

        this.acumEdad = this.acumEdad + personas.edad;
    }

    calcularEdadPromedio(){
        return this.acumEdad / this.contTodo;
    }

    mostrarEdadMMujeres(){
        return this.mayor;
    }
}