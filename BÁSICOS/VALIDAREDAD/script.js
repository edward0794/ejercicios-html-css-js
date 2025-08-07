document.getElementById("boton").addEventListener("click", function() {

    let input = (document.getElementById("edad").value);
    let edad = parseInt(input);

    if(isNaN(edad)) {
        document.getElementById("Resultado").textContent = "Por favor, ingresa una edad válida";
    }else if(edad >= 18){
        document.getElementById("Resultado").textContent = "Eres mayor de edad";
    }else {
        document.getElementById("Resultado").textContent = "Eres menor de edad"
    }
})