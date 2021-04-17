/* 4.	Realizar un programa de procesos en el que se almacenen 3 números en 3 variables A, B y C.  */
//punto 4

let valida1=false
let valida2=false
let valida3=false
let numero1,numero2,numero3
while(valida1==false){
numero1=parseInt(prompt("ingrese el primer numero"))
valida1=Number.isInteger(numero1)
if (valida1==false) {
    alert("ingrese un valor valido")
}
}
while(valida2==false){
    numero2=parseInt(prompt("ingrese el segundo numero"))
    valida2=Number.isInteger(numero2)
    if (valida2==false) {
        alert("ingrese un valor valido")
    }
}
 while(valida3==false){
    numero3=parseInt(prompt("ingrese el tercer numero"))
    valida3=Number.isInteger(numero3)
    if (valida3==false) {
        alert("ingrese un valor valido")
    }
}
console.log("numero uno "+numero1)
console.log("numero dos "+numero2)
console.log("numero tres "+numero3)