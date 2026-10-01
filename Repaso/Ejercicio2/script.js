var numeros =  []

for (let i = 0; i < 5; i++) {
    let numero = parseInt(prompt("Ingrese un número:"));
    numeros.push(numero);
} 

document.write("<h3>La lista de numeros en orden inverso es: </h3>");
document.write(numeros.reverse());