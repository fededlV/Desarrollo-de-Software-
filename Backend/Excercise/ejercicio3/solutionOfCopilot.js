fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((data) => {
    const characters = []; // Declare an empty array

    data.results.map((character) => {
      characters.push(character); // Push each character object into the array
      console.log("Name:", character.name);
      console.log("Status:", character.status);
      console.log("Species:", character.species);
      console.log("Gender:", character.gender);
      console.log("----------------------");
    });

    // Use the characters array as needed
    console.log("All characters:", characters);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
/*   .then((response) => response.json())
  .then((data) => {
    data.results.map((character) => {
      console.log("Name:", character.name);
      console.log("Status:", character.status);
      console.log("Species:", character.species);
      console.log("Gender:", character.gender);
      console.log("----------------------");
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  }); */
