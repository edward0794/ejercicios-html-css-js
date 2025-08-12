document.getElementById("generar").addEventListener("click", function() {

    let num = parseInt(document.getElementById("numero").value); 
    let tabla = "";

    if(isNaN(num)){
        document.getElementById("resultado").textContent = "Por favor, ingrese un número válido";
        return;
    }

    for(let i = 1; i <= 10; i++) {
        tabla += `${num} x ${i} = ${num * i}<br>`;
    }

    document.getElementById("resultado").innerHTML = tabla;
});