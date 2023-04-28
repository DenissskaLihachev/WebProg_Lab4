const express = require("express");
const bodyParser = require("body-parser");
const app = express();
// создаем парсер для данных формы application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.get("/", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "/register.html");
});
app.post("/data", urlencodedParser, function (request, response) {
  // response.redirect("/data");
  console.log(request.body); // вывод данных на консоль
  if (!request.body) return response.sendStatus(400);
  if (request.body.userLogin == "user") {
    response.send(
      `Логин: ${request.body.userLogin} | Пароль: ${request.body.userPassword}`
    );
  } else if (request.body.userLogin == "admin") {
    response.redirect("/dataAdmin");
  } else response.redirect("/");
});
app.get("/dataAdmin", urlencodedParser, function (request, response) {
  response.sendFile(__dirname + "/admin.html");
});
app.use("/*", function (request, response) {
  response.redirect("/");
});

app.listen(3000);
