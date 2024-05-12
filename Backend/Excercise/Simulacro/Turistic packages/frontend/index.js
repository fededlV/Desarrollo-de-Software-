const apiUrl = "http://localhost:3000/paquetes"; // Reemplaza con la URL de tu API

// Función para cargar la grilla de paquetes
function cargarPaquetes() {
  const $tabla = document.getElementById("lista-paquetes");
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
        $tabla.innerHTML += `<tr>
                    <th>${p.destino}</th>
                    <th>${p.duracion}</th>
                    <th>${p.precio}</th>
                    <th>${p.descripcion}</th>
                    <th><button class="btn btn-danger btn-sm" onclick="eliminarPaquete(${p.id})">Eliminar</button></th>
                </tr>`;
      });
    });
}

// Función para buscar paquetes por descripción
function buscarPaquetes() {
  const busqueda = document.getElementById("buscar-input").value.toLowerCase();
  const $tabla = document.getElementById("lista-paquetes");
  fetch(apiUrl + "/consulta?q=" + busqueda)
    .then((res) => {
      return res.json();
    })
    .then((paquetes) => {
      paquetes.forEach((p) => {
        $tabla.innerHTML = `<tr>
            <th>${p.destino}</th>
            <th>${p.duracion}</th>
            <th>${p.precio}</th>
            <th>${p.descripcion}</th>
            <td><button class="btn btn-danger btn-sm" onclick="eliminarPaquete(${p.id})">Eliminar</button></td>
            </tr>`;
      });
    });
}

// Función para agregar un nuevo paquete
function agregarPaquete() {
  const $tabla = document.getElementById("lista-paquetes");
  const destino = document.getElementById("destino-input").value;
  const duracion = document.getElementById("duracion-input").value;
  const precio = document.getElementById("precio-input").value;
  const descripcion = document.getElementById("descripcion-input").value;
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ destino, duracion, descripcion, precio }),
  })
    .then((res) => {
      if (res.status !== 201) {
        throw new Error("Error al crear el paquete");
      }
      return res.json();
    })
    .then((paquete) => {
      paquete.forEach((p) => {
        $tabla.innerHTML += `<tr>
            <th>${p.destino}</th>
            <th>${p.duracion}</th>
            <th>${p.precio}</th>
            <th>${p.descripcion}</th>
            <td><button class="btn btn-danger btn-sm" onclick="eliminarPaquete(${p.id})">Eliminar</button></td>
            </tr>`;
      });
    })
    .catch((error) => {
      console.error("Error al crear el paquete", error);
    });
}

// Función para eliminar un paquete
function eliminarPaquete(id) {
  const $tabla = document.getElementById("lista-paquetes");
  const $botonEliminar = document.getElementsByClassName("eliminar");
  if (confirm("¿Estás seguro de eliminar el paquete?")) {
    fetch(apiUrl + "/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status !== 204) {
          throw new Error("Error al eliminar el paquete");
        }
        return res.json();
      })
      .then((paquete) => {
        paquete.forEach((p) => {
          $tabla.innerHTML += `<tr>
            <th>${p.destino}</th>
            <th>${p.duracion}</th>
            <th>${p.precio}</th>
            <th>${p.descripcion}</th>
            <td><button class="btn btn-danger btn-sm" onclick="eliminarPaquete(${p.id})">Eliminar</button></td>
            </tr>`;
        });
      });
  }
}

// Cargar la lista de paquetes al cargar la página
cargarPaquetes();
