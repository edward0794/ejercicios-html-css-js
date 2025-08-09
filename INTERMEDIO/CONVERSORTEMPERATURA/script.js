document.getElementById("convertir").addEventListener("click", function () {
    const temperatura = parseFloat(document.getElementById("valor").value);
    const tipo = document.getElementById("tipoConversion").value;
    const resultado = document.getElementById("resultado");

    // Validar número
    if (isNaN(temperatura)) {
        resultado.textContent = "Por favor, ingrese un número válido.";
        return;
    }

    let conversion;

    if (tipo === "c-f") {
        conversion = (temperatura * 9/5) + 32;
        resultado.textContent = `${temperatura}°C son ${conversion.toFixed(2)}°F`;
    } else if (tipo === "f-c") {
        conversion = (temperatura - 32) * 5/9;
        resultado.textContent = `${temperatura}°F son ${conversion.toFixed(2)}°C`;
    } else {
        resultado.textContent = "Seleccione un tipo de conversión.";
    }
});
