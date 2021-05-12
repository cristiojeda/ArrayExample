//Ejemplo de Array con elementos de un Carrito

const carrito = [ //Nombre del Array y sus elementos
    { nombre: 'Monitor 27 Pulgadas', precio: 500}, //Elemento 1 - Posición 0
    { nombre: 'Televisión', precio: 100},  //Elemento 2 - Posición 1
    { nombre: 'Tablet', precio: 200},  // Elemento 3 - Posición 2
    { nombre: 'Teclado', precio: 400}, // Elemento 4 - Posición 3
    { nombre: 'Celular', precio: 700}, // Elemento 5 - Posición 4
]

// console.log(carrito[0]); // Ejemplo para obtener el primer elemento del Array
console.log(carrito.length);//cantidad Total de elementos de un array

for(let i = 0; i< carrito.length; i++) { //Recorrido del Array y sus elementos
    console.log(carrito[i].nombre); // Impresión en consola de la lista de elementos del Array
}