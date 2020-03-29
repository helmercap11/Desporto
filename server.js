/**
 * Script principal da API
 */

 // dependências da API
 const express = require("express");
 const conexaoBD = require("./src/models/database.js");
 const bodyParser = require("body-parser");
 const router = require("./src/routes/escalao.routes.js");

 // iniciar o express
 const app = express();

 // iniciar a base de dados
 conexaoBD.init();

 // definições gerais da api 
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));


 // rota simples
 app.get("/", (req, res) => {
     res.json({ message: "Bem Vindo a Aplicação!" });
 });

 // iniciar o script das rotas
 router(app);

 // rodar o servidor em uma porta
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, () => {
     console.log(`Servidor rodando na porta ${PORT}.`);
 });