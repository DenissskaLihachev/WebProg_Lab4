const express = require("express");
const hbs = require("hbs");
const app = express();

// регистрация хелпера
hbs.registerHelper("getNews", function () {
  var arr = new Array(
    "Облака не могут двигаться на юго-запад.",
    "Таракан может прожить 9 дней с оторванной головой, пока не сдохнет от голода.",
    "Самым молодым родителям в мире было 8 лет и 9 и жили в Китае в 1910 году.",
    "Зоопаpк в Токио каждый год закpывается на 2 месяца, чтобы звеpи могли отдохнyть от посетителей.",
    "Rio de Janeiro, буквальный перевод с португальского — январская река"
  );
  return arr[Math.floor(Math.random() * 5)];
});

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");
app.use("/content", function (request, response) {
  response.render("content.hbs");
});
app.use("/info", function (request, response) {
  response.render("info.hbs");
});
app.use("/", function (request, response) {
  response.render("home.hbs");
});
app.use("/*", function (request, response) {
  response.redirect("/");
});
app.listen(3000);
