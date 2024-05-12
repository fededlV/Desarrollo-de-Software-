const getMuseos = async () => {
  const $tabla = document.getElementById("TablaMuseos");
  fetch("http://localhost:3000/museum")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      $tabla.innerHTML = "";
      data.forEach((e) => {
        const row = `<tr>
            <td>${e.nombre}</td>
            <td>${e.ubicacion}</td>
            <td>${e.exposiciones}</td>
            <td>${e.horarios}</td>
            <td>${e.precioEntrada}</td>
            </tr>`;
        $tabla.innerHTML += row;
      });
    });
};

const getByName = async () => {
  let name = document.getElementById("name");
  const $tabla = document.getElementById("TablaMuseos");
  fetch(`http://localhost:3000/museum/${name}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      $tabla.innerHTML = "";
      data.forEach((e) => {
        const row = `<tr>
            <td>${e.nombre}</td>
            <td>${e.ubicacion}</td>
            <td>${e.exposiciones}</td>
            <td>${e.horarios}</td>
            <td>${e.precioEntrada}</td>
            </tr>`;
        $tabla.innerHTML += row;
      });
    });
};

const eliminarMuseos = async () => {
  fetch(`http://localhost:3000/museos/`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        getMuseos();
      } else {
        console.error("Error al eliminar el museo: ", res.status);
      }
    })
    .catch((err) => {
      console.error("Error al eliminar el museo: ", err);
    });
};

const agregarMuseos = async () => {
  fetch("http://localhost:3000/museos", {
    method: "POST",
  })
    .then((res) => {
      if (res.ok) {
        getMuseos();
      } else {
        console.error("Error al agregar el/los museo/s: ", res.status);
      }
    })
    .catch((err) => {
      console.error("Error al agregar el/los museo/s: ", err);
    });
};
