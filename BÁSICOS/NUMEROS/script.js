document.getElementById("boton").addEventListener("click", function() {

    let input = document.getElementById("numero").value;
    let num = parseFloat(input);

    if(isNaN(num)) {
        document.getElementById("resultado").textContent = "Por favor, ingrese un número válido";
    }else if(num >= 1) {
        document.getElementById("resultado").textContent = "El número es Positivo";
    }else if(num === 0) {
        document.getElementById("resultado").textContent = "El número es igual a cero";
    }else {
        document.getElementById("resultado").textContent = "El número es negativo";
    }
})