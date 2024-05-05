const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/posts", async (req, res) => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  res.render("posts", { posts: response.data }); //Para consultar datos externos y mostrarselos al cliente. Se consulta los datos,
  //Se obtienen los datos y se los envia al cliente
});

module.exports = router;
