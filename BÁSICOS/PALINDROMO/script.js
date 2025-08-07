document.getElementById("boton").addEventListener("click", function(event) {
    event.preventDefault();

    let palabra = document.getElementById("palabra").value.toLowerCase().replace(/\s/g, '');
    let invertida = palabra.split('').reverse().join('');

    let esPalindromo = palabra === invertida;
    let mensaje = esPalindromo
    ? `"${palabra}" Si es un palindromo`
    : `"${palabra}" No es un palindromo`;

    document.getElementById("resultado").textContent = mensaje;
})