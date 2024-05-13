apiUrl = "http://localhost:3000";
const getLocales = () => {
  const tbody = document.getElementById("datos");
  tbody.innerHTML = "";
  fetch(`${apiUrl}/locales`)
    .then((res) => {
      return res.json();
    })
    .then((locales) => {
      locales.forEach((l) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${l.number}</td>
            <td>${l.store_name}</td>
            <td>${l.address}</td>
            <td>${l.city}</td>
            <td>${l.latitude}</td>
            <td>${l.longitude}</td>
            <td>${l.province}</td>
            `;
        tbody.appendChild(row);
      });
    });
};

const getLocalesInt = () => {
  const tbody = document.getElementById("datos");
  tbody.innerHTML = "";
  /* const interiorButton = document.getElementById("btn-interior");
  interiorButton.addEventListener("click", getLocalesInt); */
  fetch(`${apiUrl}/locales/interior`)
    .then((res) => {
      return res.json();
    })
    .then((locales) => {
      locales.forEach((l) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${l.number}</td>
            <td>${l.store_name}</td>
            <td>${l.address}</td>
            <td>${l.city}</td>
            <td>${l.latitude}</td>
            <td>${l.longitude}</td>
            <td>${l.province}</td>
            `;
        tbody.appendChild(row);
      });
    });
};

document.addEventListener("DOMContentLoaded", async () => {
  try {
    getLocales();
  } catch (error) {
    window.alert("Error al cargar los locales");
  }
});
