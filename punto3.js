/* 3.	Realizar un programa que pueda sumar dos números leídos por teclado y escribir el resultado. */

//punto 3
let inicio=true
let numero1
let valida=true
while(inicio==true){
    if (valida==true)
    {
    numero1=parseInt( prompt("ingrese el primer valor"))
    }   
valida =Number.isInteger(numero1)
if (valida==true) {
    let numero2=parseInt( prompt("ingrese el segundo valor"))
    let valida2 =Number.isInteger(numero2)
    if (valida2==true) {
        console.log("numero uno "+numero1)
        console.log("numero dos "+numero2)
        console.log("La suma es "+(numero1+numero2)) 
        inicio=false
    }
    else{
        alert("ingrese un valor valido")
        valida=false
    }  
}
else {
    alert("ingrese un valor valido")
    inicio=true
    valida=true
}
}