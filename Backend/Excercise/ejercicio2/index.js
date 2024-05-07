function getDatos(url) {
  return fetch(url).then((res) => res.json());
}
async function showPersonajes(numPersonaje) {
  try {
    let url = "https://swapi.dev/api/people/" + numPersonaje;
    let personaje = await getDatos(url);
    console.log("------------Datos Personaje--------");
    console.log("Nombre:", personaje.name);
    console.log("Heigh:", personaje.height);
    console.log("Mass:", personaje.mass);
    console.log("Hair Color:", personaje.hair_color);
    console.log("Skin Color:", personaje.skin_color);
    console.log("Eye color:", personaje.eye_color);
    console.log("Birth Year:", personaje.birth_year);
    let home = await getDatos(personaje.homeworld);
    console.log("Homeworld: ", home.name);
  } catch (error) {
    console.log("Error al obtener datos del personaje: ", error);
  }
}

showPersonajes(1);
