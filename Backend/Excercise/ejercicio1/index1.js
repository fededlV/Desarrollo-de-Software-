"use strict";
const fs = require("fs");
const { readFile } = require("fs/promises");
const { get } = require("http");

const guardarArchivoJSON = (data) => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFileSync("chistes.json", jsonData, "utf-8", (err) => {
    if (err) {
      console.log("Error al escribir el archivo JSON: ", err);
      return;
    }
    console.log("Archivo JSON guardado con éxito");
  });
};

/* async function getChuckNorrisJokes(numJokes) {
  try {
    let id = ""
    const response = await fetch(
      `https://api.chucknorris.io/jokes/random/${id}`
    );
    const data = await response.json();
    for (let i = 0; i < numJokes; i++) {
      let id = fetch(`https://api.chucknorris.io/jokes/random`)
      id.then(res => {
        return id = 
      })
    }
    const jokes = data.map((joke) => joke.value);
    jokes.forEach((joke, index) => {
      console.log(`Chuck Norris Joke ${index + 1}: ${joke}`);
    });
  } catch (error) {
    console.error("Error al obtener los chistes de Chuck Norris: ", error);
  }
} */

async function obtenerChistesChuckNorris(n) {
  const chistes = [];
  for (let i = 0; i < n; i++) {
    const respuesta = await fetch("https://api.chucknorris.io/jokes/random");
    const chiste = await respuesta.json();
    chistes.push(chiste.value);
  }
  chistes.map((chiste) => console.log(chiste));
}

// Uso de la función:
obtenerChistesChuckNorris(5);

/* getChuckNorrisJokes(5); */
