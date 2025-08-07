document.getElementById("boton").addEventListener("click", function(){

    let input = (document.getElementById("numero").value);

    let num = parseInt(input)

    if (isNaN(num)) {
        document.getElementById("resultado").textContent = "⚠️ Por favor, ingrese un número válido";
        return;
    }

    let mensaje = num % 2 === 0
    ?`el numero ${num} es par`
    :`el numero ${num} es impar`
    
     document.getElementById("resultado"). textContent = mensaje;
});