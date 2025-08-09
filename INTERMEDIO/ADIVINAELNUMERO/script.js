// Número secreto y contador de intentos
let numSecreto = Math.floor(Math.random() * 100) + 1;
let contador = 0;

// Solo para depuración (puedes quitarlo después)
console.log("Número secreto:", numSecreto);

// Evento para probar número
document.getElementById("probar").addEventListener("click", function () {
    const num = parseInt(document.getElementById("numero").value, 10);

    // Validación
    if (isNaN(num)) {
        document.getElementById("mensaje").textContent = "Ingrese un número válido.";
        return;
    }

    // Incrementar intentos
    contador++;

    // Comparar número
    if (num === numSecreto) {
        document.getElementById("mensaje").textContent =
            `🎉 ¡Felicidades! Acertaste en ${contador} intentos.`;
            mensaje.clasName = "ganaste";
    } else if (num > numSecreto) {
        document.getElementById("mensaje").textContent =
            "El número ingresado es mayor al número secreto.";
    } else {
        document.getElementById("mensaje").textContent =
            "El número ingresado es menor al número secreto.";
    }

    // Mostrar intentos
    document.getElementById("intentos").textContent = `Intentos: ${contador}`;
});

// Evento para reiniciar juego
document.getElementById("reiniciar").addEventListener("click", function () {
    numSecreto = Math.floor(Math.random() * 100) + 1;
    contador = 0;
    document.getElementById("numero").value = "";
    document.getElementById("mensaje").textContent = "";
    document.getElementById("intentos").textContent = "Intentos: 0";

    console.log("Nuevo número secreto:", numSecreto);
});
