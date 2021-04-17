/* 
 1.	Realizar un programa que permita leer 2 números diferentes y nos diga cual es el mayor de los 2 números.
  */

//punto 1
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
        //cual es el numero mayor
        if (numero1<numero2) {
            console.log("el numero mayor es "+numero2)
            inicio=false   
        }
        else{
            console.log("el numero mayor es "+numero1)
            inicio=false  
        }   
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