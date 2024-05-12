const apiUrl = 'http://localhost:3000/paquetes'; // Reemplaza con la URL de tu API

// Función para cargar la grilla de paquetes
function cargarPaquetes() {

   let listaPaquetesTuristico = document.getElementById('lista-paquetes');
   listaPaquetesTuristico.innerHTML = ''; // Limpiar la lista
   fetch(apiUrl)
      .then((respuesta) => { return respuesta.json() })
      .then((paquetes) => {
         paquetes.forEach(paquete => {
            const row = document.createElement('tr');
            row.innerHTML = `
             <td>${paquete.destino}</td>
             <td>${paquete.duracion}</td>
             <td>${paquete.precio}</td>
             <td>${paquete.descripcion}</td>
             <td>
                 <button class="btn btn-danger btn-sm" onclick="eliminarPaquete(${paquete.id})">Eliminar</button>
             </td>
         `;
            listaPaquetesTuristico.appendChild(row);
         });
      });
}

// Función para buscar paquetes por descripción
function buscarPaquetes() {
   const query = document.getElementById('buscar-input').value;
   let url = apiUrl;
   if (query) {
      url += `/consulta?q=${query}`;
   }
   fetch(url)
      .then((respuesta) => { return respuesta.json() })
      .then((paquetes) => {
         // Actualiza la grilla con los resultados
         const listaPaquetes = document.getElementById('lista-paquetes');
         listaPaquetes.innerHTML = ''; // Limpiar la lista

         paquetes.forEach(paquete => {
            const row = document.createElement('tr');
            row.innerHTML = `
               <td>${paquete.destino}</td>
               <td>${paquete.duracion}</td>
               <td>${paquete.precio}</td>
               <td>${paquete.descripcion}</td>
               <td>
                  <button class="btn btn-danger btn-sm" onclick="eliminarPaquete(${paquete.id})">Eliminar</button>
               </td>
         `;
            listaPaquetes.appendChild(row);
         });
      });
}

// Función para agregar un nuevo paquete
function agregarPaquete() {
   const nuevoPaquete = {
      destino: document.getElementById('destino-input').value,
      duracion: document.getElementById('duracion-input').value,
      precio: parseFloat(document.getElementById('precio-input').value),
      descripcion: document.getElementById('descripcion-input').value
   };

   fetch(apiUrl, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoPaquete)
   }).then((response) => {
      if (response.ok) {
         // Paquete creado correctamente, limpiar los campos y recargar la lista 
         document.getElementById('destino-input').value = "";
         document.getElementById('duracion-input').value = "";
         document.getElementById('precio-input').value = "";
         document.getElementById('descripcion-input').value = "";
         cargarPaquetes();
      } else {
         alert('Error al crear el paquete');
      }
   });
}

// Función para eliminar un paquete
function eliminarPaquete(id) {
   if (confirm('¿Estás seguro de que quieres eliminar este paquete?')) {
      fetch(`${apiUrl}/${id}`, {
         method: 'DELETE'
      }).then((response) => {
         if (response.ok) {
            // Paquete eliminado correctamente, recargar la lista
            cargarPaquetes();
         } else {
            alert('Error al eliminar el paquete');
         }
      });
   }
}

// Cargar la lista de paquetes al cargar la página
cargarPaquetes();