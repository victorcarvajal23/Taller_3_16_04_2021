/* 
2.	Realice un programa que calcule el máximo de N números leídos desde teclado.
 Nota: En los archivos index.html mostrar en la pantalla un mensaje que diga
  “Ver la consola del navegador o oprima la tecla F12 para ver los resultados”.
   Si utiliza la función console.log(); de lo contrario si utiliza alert(); No mostrar nada en el index.html */

   //punto 2
let total=0
let numero=prompt("ingrese los  valores")
for (const recorre of numero) {
   let numero2=parseInt(recorre)
   let valida= Number.isInteger(numero2)
   if (valida==true) {
      total++
   }    
}
console.log("total "+numero)
console.log("numeros leidos "+total)



