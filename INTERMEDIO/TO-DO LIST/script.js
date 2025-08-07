document.addEventListener("DOMContentLoaded", () => {
    const lista = document.getElementById("lista");
    const input = document.getElementById("taskInput");
    const boton = document.getElementById("boton");

    // Agregar nueva tarea
    boton.addEventListener("click", () => {
        const texto = input.value.trim();
        if (texto !== "") {
            const li = document.createElement("li");
            li.classList.add("tareas");

            li.innerHTML = `
                ${texto}
                <div>
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-trash"></i>
                </div>
            `;

            lista.appendChild(li);
            input.value = "";
        }
    });

    // Delegación de eventos para clics en tareas
    lista.addEventListener("click", (e) => {
        const target = e.target;

        // Eliminar tarea
        if (target.classList.contains("fa-trash")) {
            const tarea = target.closest("li");
            tarea.remove();
        }

        // Editar tarea
        if (target.classList.contains("fa-pen-to-square")) {
            const tarea = target.closest("li");
            const nuevoTexto = prompt("Edita la tarea:", tarea.firstChild.textContent.trim());
            if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
                tarea.firstChild.textContent = nuevoTexto;
            }
        }

        // Marcar como completada
        if (target.tagName === "LI" || target.closest("li")) {
            const tarea = target.closest("li");
            tarea.classList.toggle("done");
        }
    });
});
