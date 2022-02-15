let insertar = 'si'
let resultado = 0 
const suma = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2
while (insertar == 'si') {
    let numero1 = parseInt(prompt('Ingrese un numero'))
     if (isNaN(numero1)) {
        console.log('Numero no validos')
        continue
    }
    let numero2 = parseInt(prompt('Ingrese otro numero'))
        if (isNaN(numero2)) {
            console.log('Numero no valido')
            continue
        }
    let operacion = (prompt('¿Suman o restan?'))
        if (operacion == 'suman') {
            resultado = suma(numero1, numero2)
            console.log("El resultado es " + resultado)
        }
        else if (operacion == 'restan') {
            resultado = resta(numero1, numero2)
            console.log("El resultado es " + resultado)
        }
        else {
            console.log('No es una operacion valida')
        }
    let buscaprimo = prompt('¿Desea saber si su resultado es primo?')
        if (buscaprimo == "si") {
            for(let divisor=1; divisor<=100;divisor++) {
                if (divisor==1 || divisor==resultado) {
                    continue;
                }
                if ((resultado % divisor) == 0 ) {
                    console.log('El numero no es primo');
                    break
                }
                if (divisor === 100) {
                    console.log('El numero es primo')
                }
            }
        }
    insertar = (prompt('¿Desea insertar otro numero?'))
}