let contador = 0;

const incrementar = document.getElementById("Incrementar");
const disminuir = document.getElementById("Disminuir");
const reiniciar = document.getElementById("Reiniciar");
const valorContador= document.getElementById("valorContador");

incrementar.addEventListener('click', () => {
    contador++;
    valorContador.textContent = contador;
});
disminuir.addEventListener('click', () => {
    contador--;
    valorContador.textContent = contador;
});

reiniciar.addEventListener('click', () =>{
    valorContador.textContent = contador = 0;
})