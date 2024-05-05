const { Router } = require("express");
const router =
  Router(); /* Con esto se incluyen los metodos get o las distintas rutas con esto  */
/* function UserRoutes(app) {
  app.get("/UserName", (req, res) => {
    res.send("username route");
  });

  app.get("/profile", (req, res) => {
    console.log(req.body);
    res.send("profile page");
  });
}

module.exports = UserRoutes; */

router.get("/UserName", (req, res) => {
  res.send("username route");
});

router.get("/profile", (req, res) => {
  console.log(req.body);
  res.send("profile page");
});

module.exports = router;
