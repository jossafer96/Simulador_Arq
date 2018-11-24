//COMPONENTES EXTRAS DE NODE
var express = require("express");
var app = express();
app.use(express.static("public"));  //middleware 

app.listen(3333);
console.log("Servidor iniciado");