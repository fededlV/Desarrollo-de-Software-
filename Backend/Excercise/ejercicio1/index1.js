const obtenerChistes = (url) => {
  return fetch(url).then((res) => res.json());
};

const numChistes = async (n) => {
  const url = `https://api.chucknorris.io/jokes/random`;
  const chistes = await obtenerChistes(url);
  for (let i = 0; i < n; i++) {
    let chisteMap = chistes.map((chiste) => chiste[i].value);
    console.log(chisteMap);
  }
};

numChistes(3);
