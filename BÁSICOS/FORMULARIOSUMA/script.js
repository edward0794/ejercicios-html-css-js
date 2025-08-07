document.getElementById("sumar").addEventListener("click", function(event) {
    event.preventDefault(); //No recargar formulario

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    
    let resultado = num1 + num2;

    document.getElementById("resultado").textContent = `La suma es: ${resultado}`;
});

document.getElementById("restar").addEventListener("click", function(event) {
    event.preventDefault();

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let resultado = num1 - num2;

    document.getElementById("resultado").textContent = `La resta es: ${resultado}`;
}) 

document.getElementById("multiplicar").addEventListener("click", function(event) {
    event.preventDefault();

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let resultado = num1 * num2;

    document.getElementById("resultado").textContent = `la multiplicacion es: ${resultado}`;
})

document.getElementById("dividir").addEventListener("click", function(event) {
    event.preventDefault();

    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);

    let resultado = num1 / num2;

    document.getElementById("resultado").textContent = `la división es: ${resultado}`;
})