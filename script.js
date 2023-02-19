//var miVariable = 24;
//console.log("mi edad es " + miVariable);

//miVariable = 12;
//console.log ("mi edad ahora es " + miVariable);

//const miConstante = 3;
//console.log("el valor de mi constante es " + miConstante);

//var op1 = 2;
//var op2 = 3;
//var resultado = op1 + op2;
//console.log ("resultado vale: " + resultado);

//CONDICIONALES
//let miNumero = 7;

//let resultadoPregunta = miNumero == 7;
//console.log(resultadoPregunta);

//    if (miNumero == 7) {
//    console.log ("si mi numero vale 7");
//    } else{
//    console.log ("No. reintentalo por favor!");
//    }

// let miNumero2 = 5;
// if (miNumero2 > 0){
//   console.log ("Mi numero es positivo");
// }else if (miNumero2 === 0){
//    console.log("Mi numero es zero");
// }else{
//   console.log ("Mi numero es negativo");
// }

//function saludar(nombre, edad) {
//    console.log("hola mi nombre es: " + nombre);
//    console.log("y mi edad es: " + edad);
//}

//saludar("laura", 24);

//PRESENTACION DE LA PAGINA CON ALERT//

Saludar = "Hola bienvenido al proyecto de coderhouse | Entrega 2" 

alert(Saludar)

function multiplicar(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}

//console.log (multiplicar(2, 5));

//arrays <>

let miArreglo = ["Agustin", "kevin", "pablo", "carla" ]

for (let i = 0; i < 4; i++ ){
    console.log ("accediendo al indice:" + i)
    let mostrar = miArreglo [i];
    console.log (mostrar);
}

//Objetos

let persona = {
    nombre:"Agustin",
    edad: 20,
    masculino: true
}

let persona2 ={
    nombre: "kevin",
    edad: 24,
    masculino: false
}

console.log (persona)
console.log (persona2)

let arreglodeObjetos = [persona, persona2]




const txtOp1 = document.getElementById("op1")
const txtOperacion = document.getElementById("operacion")
const txtOp2 = document.getElementById("op2")
const btnCalcular = document.getElementById("calcular")
const pResultado = document.getElementById("resultado")

btnCalcular.addEventListener('click', calcular)

function calcular(){
    const operacion = txtOperacion.value
    const op1 = parseFloat(txtOp1.value)
    const op2 = parseFloat(txtOp2.value)

    if((operacion == "+" || operacion == "-" || operacion == "*" || operacion == "/") && !isNaN(op1) && !isNaN(op2)){
        let resultado;
        switch (operacion){
            case "+":
                resultado = op1 + op2
                break;
            case "-":
                resultado = op1 - op2
                break;
            case "*":
                resultado = op1*op2
                break;
            case "/":
                resultado = op1/op2
                break
        }
        pResultado.style = "color:black"
        pResultado.innerText = "= " + resultado
    }else{
        pResultado.style = "color:red"
        pResultado.innerText = "Calculo imposible"
    }
}