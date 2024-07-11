let num1 = parseInt(prompt("Ingrese el primer valor"));
let num2 = parseInt(prompt("Ingrese el segundo valor"));
let num3 = parseInt(prompt("Ingrese el tercer valor"));

if(num1 > num2 && num3){
    document.write("el num1 es mayor que num2 y num3");
}
else if(num2 > num1 && num3){
    document.write("el num2 es mayor que num2 y num3")
}
else{
    document.write("el num3 es mayor que el num1 y num2")
}