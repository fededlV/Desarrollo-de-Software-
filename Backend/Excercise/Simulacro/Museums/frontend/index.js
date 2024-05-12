const apiUrl = "http://localhost:3000/museos";

const getMuseos = async () => {
  const $table = document.getElementById("TablaMuseos");
  fetch(apiUrl)
    .then((res) => {
      return res.json();
    })
    .then((museos) => {
      museos.forEach((m) => {
        $table.innerHTML += `<tr>
      <td>${m.nombre}</td>
      <td>${m.ubicacion}</td>
      <td>${m.exposiciones}</td>
      <td>${m.horarios}</td>
      <td>${m.precioEntrada}</td>
      </tr>`;
      });
    });
};

const eliminarMuseo = async () => {
  const $table = document.getElementById("TablaMuseos");
  const nombre = document.getElementById("deleted").value.toLowerCase();
  fetch(apiUrl + "?q=" + nombre, {
    method: "DELETE",
  })
    .then((res) => {
      return res.json();
    })
    .then((museos) => {
      museos.forEach((m) => {
        $table.innerHTML += `<tr>
    <td>${m.nombre}</td>
    <td>${m.ubicacion}</td>
    <td>${m.exposiciones}</td>
    <td>${m.horarios}</td>
    <td>${m.precioEntrada}</td>
    </tr>`;
      });
    });
};

const agregarMuseo = async () => {
  const $table = document.getElementById("TablaMuseos");
  const nombre = document.getElementById("nombre-input").value;
  const ubicacion = document.getElementById("ubicacion-input").value;
  const exposiciones = document.getElementById("exposiciones-input").value;
  const horarios = document.getElementById("horarios-input").value;
  const precioEntrada = document.getElementById("precioEntrada-input").value;
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nombre,
      ubicacion,
      exposiciones,
      horarios,
      precioEntrada,
    }),
  })
    .then((res) => {
      if (res.status !== 201) {
        throw new Error("Error al agregar el museo");
      }
      return res.json();
    })
    .then((museos) => {
      museos.forEach((m) => {
        $table.innerHTML += `<tr>
      <td>${m.nombre}</td>
      <td>${m.ubicacion}</td>
      <td>${m.exposiciones}</td>
      <td>${m.horarios}</td>
      <td>${m.precioEntrada}</td>
      </tr>`;
      });
    });
};

const getByName = async () => {
  const $table = document.getElementById("TablaMuseos");
  const name = document.getElementById("name").value;
  fetch(`${apiUrl}/consulta?q=${name}`)
    .then((res) => {
      return res.json();
    })
    .then((museos) => {
      museos.forEach((m) => {
        $table.innerHTML = `<tr>
      <td>${m.nombre}</td>
      <td>${m.ubicacion}</td>
      <td>${m.exposiciones}</td>
      <td>${m.horarios}</td>
      <td>${m.precioEntrada}</td>
      </tr>`;
      });
    });
};
