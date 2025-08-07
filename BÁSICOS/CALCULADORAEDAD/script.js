document.getElementById("boton").addEventListener("click", function() {
    const fecha = document.getElementById("fechaNacimiento").value;
    if (!fecha) return;

    let fechaActual = new Date();
    let fechaNacimiento = new Date(fecha);
    let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
    let mes = fechaActual.getMonth() - fechaNacimiento.getMonth();

    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNacimiento.getDate())) {
        edad--;
    }

    document.getElementById("edad").textContent = `Su edad es: ${edad} años`;
});
