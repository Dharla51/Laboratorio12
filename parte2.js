let a= parseInt(prompt("Digite el primer numero: ")); 
let b= parseInt(prompt("Digite el segundo numero: "));
let fun=prompt("Digite la operacion a realizar (suma 1 /resta 2 /multiplicacion 3 /division 4): "); 
 
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

function calcular(a, b, fun) { 
    switch (fun) { 
        case "1": return suma(a, b); 
        case "2": return resta(a, b); 
        case "3": return multiplicacion(a, b); 
        case "4": return division(a, b); 
        default: return "OPERADOR INVALIDO"; } 
}

console.log("el resultado es: "+calcular(a,b,fun)); 
document.write("el resultado es: "+calcular(a,b,fun)+"<br>"); 

