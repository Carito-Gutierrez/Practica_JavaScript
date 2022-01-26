//let nombre = "lo que sea";
//const constantes = "no lo voy a poder cambiar";

//console.log(nombre, 78 * 9);

// if else - si, entonces

// es igual y del mismo tipo ===
// es igual ==
// menor o igual <=
// mayor o igual >=
//no es igual (incluyendo el tipo) !==
// no es (no toma en cuenta el tipo) !=  (numero, obje, tex)

// &&  y  condi1 && condi2 se cumple
// || ó condi1 || condi2

// condicional ternario / condiction ? si se cumple : accion por defecto

// construir un algoritmo que me diga si un numero es primo o no es primo

let num1 = 16;

if (num1 % 2 === 0 && num1 !== 0) {
  console.log(`El numero ${num1} es par`);
} else {
  console.log(" El número es impar");
}

let num1 = 0;

let res = num1 % 2 === 0 ? console.log("par") : console.log(" impar ");
