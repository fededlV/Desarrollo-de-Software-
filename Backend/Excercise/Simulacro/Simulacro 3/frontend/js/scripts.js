const apiUrl = "http://localhost:3000/eventos";

const cargarEventos = () => {
  //Aqui nos conectaremos con el backend
  let tabla = document.getElementById("grilla-eventos");
  tabla.innerHTML = "";
  fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((eventos) => {
      eventos.forEach((e) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                  <td>${e.nombre}</td>
                  <td>${e.descripcion}</td>
                  <td>${e.ubicacion}</td>
                  <td>${e.fechaInicio}</td>
                  <td>${e.fechaFin}</td>
                  <td>${e.tipoAsistencia}</td>
                  <td>
                    <button type="button" class="btn btn-outline-success">
                      <a href="${e.enlace}" title="Ir a enlace" class="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Para mas Informacion</a>
                    </button>
                  </td>
      `;
        tabla.appendChild(row);
      });
    });
};

document.addEventListener("DOMContentLoaded", async () => {
  await cargarEventos();
});
