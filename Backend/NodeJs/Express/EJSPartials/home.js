const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "index page" });
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/dashboard", (req, res) => {
  res.render("dashboard");
});

module.exports = router;
