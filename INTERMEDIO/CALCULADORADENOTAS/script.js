document.getElementById("calcular").addEventListener("click", function(){

    let notas = document.querySelectorAll(".nota");
    let suma = 0;
    let cantidad = 0;


    for (let i = 0; i < notas.length; i++ ) {
        let valor = parseFloat(notas[i].value);

        if(isNaN(valor) || valor < 1 || valor > 5) {
        document.getElementById("resultado").textContent = "Ingrese datos válidos";
        return;
    }

        suma += valor;
        cantidad++;
    }

    let promedio = suma / cantidad;
    let resultado = promedio.toFixed(2);

    if (resultado >= 3.0 && resultado <= 5.0) {
        document.getElementById("resultado"). textContent = `su promedio es: ${resultado}, usted aprobó`;
    } else {
        document.getElementById("resultado"). textContent = `su promedio es: ${resultado}, usted reprobó`;
    }
});