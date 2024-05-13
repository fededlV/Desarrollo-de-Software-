import { allowedNodeEnvironmentFlags } from "process";

apiUrl = "http://localhost:3001/museos";

const getMuseums = () => {
  let tbody = document.getElementById("lista-museos");
  tbody.innerHTML = "";
  fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((m) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${m.nombre}</td>
            <td>${m.ubicacion}</td>
            <td>${m.exposiciones}</td>
            <td>${m.horarios}</td>
            <td>${m.precioEntrada}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteMuseum(${m.id})">Eliminar</button>
            </td>
            `;
        tbody.appendChild(row);
      });
    });
};
getMuseums();

const createMuseum = () => {
  let nuevoMuseo = {
    nombre: document.getElementById("nombre").value,
    ubicacion: document.getElementById("ubicacion").value,
    exposiciones: document.getElementById("exposiciones").value,
    horarios: document.getElementById("horarios").value,
    precioEntrada: document.getElementById("precioEntrada").value,
  };
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(nuevoMuseo),
  }).then((res) => {
    if (res.status !== 201) {
      alert("Error al crear el museo");
    }
    document.getElementById("nombre").value = "";
    document.getElementById("ubicacion").value = "";
    document.getElementById("exposiciones").value = "";
    document.getElementById("horarios").value = "";
    document.getElementById("precioEntrada").value = "";
    getMuseums();
  });
};

const deleteMuseum = (id) => {
  fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  }).then(() => {
    getMuseums();
  });
};
