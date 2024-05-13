const apiUrl = "http://localhost:3000/paquetes"; // Reemplaza con la URL de tu API

// Función para cargar la grilla de paquetes
function cargarPaquetes() {
  let $tabla = document.getElementById("lista-paquetes");
  $tabla.innerHTML = "";
  /* const celdaAccion = document.createElement("th");
  const boton = document.createElement("button");
  const eliminar = celdaAccion.appendChild(boton);
  boton.textContent = "Eliminar"; */
  fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((paquetes) => {
      paquetes.forEach((p) => {
        const row = document.createElement("tr");
        row.innerHTML = `
                    <th>${p.destino}</th>
                    <th>${p.duracion}</th>
                    <th>${p.precio}</th>
                    <th>${p.descripcion}</th>
                    <th><button class="btn btn-danger btn-sm" onclick="eliminarPaquete(${p.id})">Eliminar</button></th>
                `;
        $tabla.appendChild(row);
      });
    });
}

// Función para buscar paquetes por descripción
function buscarPaquetes() {
  const busqueda = document.getElementById("buscar-input").value.toLowerCase();
  let $tabla = document.getElementById("lista-paquetes");
  fetch(apiUrl + "/consulta?q=" + busqueda)
    .then((res) => {
      return res.json();
    })
    .then((paquetes) => {
      $tabla.innerHTML = "";
      paquetes.forEach((p) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th>${p.destino}</th>
            <th>${p.duracion}</th>
            <th>${p.precio}</th>
            <th>${p.descripcion}</th>
            <td><button class="btn btn-danger btn-sm" onclick="eliminarPaquete(${p.id})">Eliminar</button></td>
            `;
        $tabla.appendChild(row);
      });
    });
}

// Función para agregar un nuevo paquete
function agregarPaquete() {
  const nuevoPaquete = {
    destino: document.getElementById("destino-input").value,
    duracion: document.getElementById("duracion-input").value,
    precio: document.getElementById("precio-input").value,
    descripcion: document.getElementById("descripcion-inpu").value,
  };
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ nuevoPaquete }),
  })
    .then((res) => {
      if (res.status !== 201) {
        throw new Error("Error al crear el paquete");
      }
      document.getElementById("destino-input").value = "";
      document.getElementById("duracion-input").value = "";
      document.getElementById("precio-input").value = "";
      document.getElementById("descripcion-input").value = "";
      cargarPaquetes();
    })
    /* .then((paquete) => {
      $tabla.innerHTML = "";
      paquete.forEach((p) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <th>${p.destino}</th>
            <th>${p.duracion}</th>
            <th>${p.precio}</th>
            <th>${p.descripcion}</th>
            <td><button class="btn btn-danger btn-sm" onclick="eliminarPaquete(${p.id})">Eliminar</button></td>
           `;
        $tabla.appendChild(row);
      });
    }) */
    .catch((error) => {
      console.error("Error al crear el paquete", error);
    });
}

// Función para eliminar un paquete
function eliminarPaquete(id) {
  if (confirm("¿Estás seguro de eliminar el paquete?")) {
    fetch(apiUrl + "/" + id, {
      method: "DELETE",
    }).then((res) => {
      if (res.status !== 204) {
        throw new Error("Error al eliminar el paquete");
      }
      cargarPaquetes();
    });
    /* .then((paquete) => {
        $tabla.innerHTML = "";
        paquete.forEach((p) => {
          const row = document.createElement("tr");
          row.innerHTML = `
            <th>${p.destino}</th>
            <th>${p.duracion}</th>
            <th>${p.precio}</th>
            <th>${p.descripcion}</th>
            <td><button class="btn btn-danger btn-sm" onclick="eliminarPaquete(${p.id})">Eliminar</button></td>
            `;
          $tabla.appendChild(row);
        }); */
    /* }); */
  }
}

// Cargar la lista de paquetes al cargar la página
cargarPaquetes();
