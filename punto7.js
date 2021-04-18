/* 7.	Dados dos números enteros positivos N y D, se dice que D es un divisor de N si 
el resto de dividir N entre D es 0. Se dice que un número N es perfecto si la suma 
de sus divisores (excluido el propio N) es N. Por ejemplo 28 es perfecto, pues sus 
divisores (excluido elv28) son: 1, 2, 4, 7 y 14 y su suma es 1+2+4+7+14=28. Hacer 
un organigrama que dado un número N nos diga si es o no perfecto. */
//punto 7

/* let numeroN=parseInt(prompt("ingrese valor de N"))
let numeroD=parseInt(prompt("ingrese valor de D"))

let resto=numeroN%numeroD

if (resto==0) {
    console.log(`D ${numeroD} es dividor de N ${numeroN}`)
}
else{
    console.log(`D ${numeroD} NO es dividor de N ${numeroN}`)
} */
let inicio=true
let suma=0
let numeroN
while(inicio==true)
{
numeroN=parseInt(prompt("ingrese valor de N"))
let valida= Number.isInteger(numeroN)
if (valida==true) {
    
    for (let i = 0; i < numeroN; i++) {
        let divisores=numeroN%i
        if (divisores==0) {
        suma=suma+i  
        }
    
    }

    inicio=false
}
else{
    alert("ingrese un valor valido para N")
    inicio=true
}
}
if (suma==numeroN) {
    console.log(`N ${numeroN} es un numero perfecto la suma de sus divisores es `+suma)
}
else {
    console.log(`N ${numeroN} NO es un numero perfecto la suma de sus divisores es `+suma)
}