let a= prompt("Digite el primer numero: "); 
let b= prompt("Digite el segundo numero: ");
 
function suma(a,b){
    return a+b; 

}
function resta(a,b){
    return a-b;
    
}
function division(a,b){
    return a/b;
}
function multiplicacion(a,b){
    return a*b;
}


console.log("La suma es: "+suma(a,b)); 
console.log("La resta es: "+resta(a,b)); 
console.log("La division es: "+division(a,b)); 
console.log("La multiplicacion es: "+multiplicacion(a,b)); 
document.write("La suma es: "+suma(a,b)+"<br>"); 
document.write("La resta es: "+resta(a,b)+"<br>"); 
document.write("La division es: "+division(a,b)+"<br>"); 
document.write("La multiplicacion es: "+multiplicacion(a,b)+"<br>"); 
