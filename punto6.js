/* 6.	Realizar un programa que lea N números, calcule y escriba la suma 
de los pares y el producto de los impares.  */
//punto 6

let numero=[]
incio=true
let sumaPar=0
let Impar=1
let resultado=0
while(incio==true){
let cantidad=parseInt(prompt("ingrese la cantidad de numeros a procesar"))
let valida=Number.isInteger(cantidad)
if (valida==true) {
    for (let i = 0; i < cantidad; i++) {
        let valor=parseInt(prompt(`ingese el numero ${(i+1)}`))
        let valida2=Number.isInteger(valor)
        if (valida2==true) {
            numero[i]=valor
        }
        else{
            i--
            alert("ingrese un valor valido")
        }     
    }
    incio=false   
}
else {
    alert("ingrese un valor valido")
    incio=true
}
}
for (let j = 0; j < numero.length; j++) {
    resultado=numero[j]
    let residuo=(resultado%2)
    if (residuo==0) {
        sumaPar=sumaPar+numero[j]
    }
    else{
        Impar= Impar*numero[j]
    }    
}
console.log(numero)
console.log("suma de los numeros pares "+sumaPar)
console.log("producto de los numeros impares "+Impar)
