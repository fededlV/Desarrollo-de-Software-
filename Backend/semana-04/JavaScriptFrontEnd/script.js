//Funcion para agregar nueva tarea 
function addTask() {
    var task = document.getElementById("task");
    var list = document.getElementById("list");
    /* var newTask = document.createElement("li"); */
    var newTaskText = nuevaTareaInput.value.trim();
/*     newTask.innerHTML = task;
    list.appendChild(newTask);
    document.getElementById("task").value = ""; */
    if (newTaskText !== "") {
        var newTask = document.createElement("li")
        task.textContent = newTaskText
        var buttonDelete = document.createElement("button")
        buttonDelete.textContent = "Eliminar"
        buttonDelete.className = "delete"
        buttonDelete.onclick = function() {
            list.removeChild(newTask)
        }
        newTask.appendChild(buttonDelete)
        list.appendChild(newTask)
        task.value = ""
    }
}

//Funcion para marcar tarea como completada
function completeTask() {
    task.classList.toggle("completed"); 
}

//Agregar evento de clic a las tareas para marcarlas como completadas
document.getElementById("list").addEventListener("click", function(event) {
    if (event.target.tagName === "LI") {
        marcarComplete(event.target)
    }
})

//Agregar evento de clic al boton "Agregar"
document.getElementById("add").addEventListener("click", addTask)