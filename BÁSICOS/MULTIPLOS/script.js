document.getElementById("boton").addEventListener("click", function() {

    let input = (document.getElementById("numero").value);
    let num = parseInt(input);

    if (num % 3 === 0 && num % 5 === 0){
        document.getElementById("resultado").textContent = `el número ${num} es multiplo de 3 y de 5`;
    } else if (num % 3 === 0) {
        document.getElementById("resultado").textContent = `el número ${num} es multiplo de 3`;
    }else if (num % 5 === 0){
        document.getElementById("resultado").textContent = `el número ${num} es multiplo de 5`;
    } else if (isNaN(num)) {
        document.getElementById("resultado").textContent = `por favor ingrese un número válido`
    }else {
        document.getElementById("resultado").textContent = `el número ${num} no es multiplo de 3 ni de  5`;
    }
});