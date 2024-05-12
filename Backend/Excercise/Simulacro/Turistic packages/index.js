document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todas las celdas de la segunda columna (índice 1)
  const celdasAcciones = document.querySelectorAll("tbody tr td:nth-child(2)");

  // Itera sobre cada celda y agrega un botón dentro
  celdasAcciones.forEach((celda) => {
    const boton = document.createElement("button");
    boton.textContent = "Acción";
    celda.appendChild(boton);
  });
});
