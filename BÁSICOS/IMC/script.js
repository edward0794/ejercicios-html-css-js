document.getElementById("boton").addEventListener("click", function() {

    let peso = parseFloat(document.getElementById("peso").value);
    let estatura = parseFloat(document.getElementById("estatura").value);

     // Validar datos
     if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
        return;
    }
    
    let imc = peso / (estatura * estatura); 
    let resultado = imc.toFixed(2);

    if (resultado <= 18.5) {
        document.getElementById("resultado").textContent = `su imc es: "${resultado}" usted presenta: bajo peso`;
    }else if(resultado >= 18.5 && resultado <= 24.9) {
        document.getElementById("resultado").textContent = `su imc es: "${resultado}" usted presenta: peso Normal`;
    }else if(resultado >= 25 && resultado <= 29.9) {
        document.getElementById("resultado").textContent = `su imc es: "${resultado}" usted presenta: Sobrepeso`;
    }else{
        document.getElementById("resultado").textContent = `su imc: "${resultado}" usted presenta: Obesidad`;
    }
});