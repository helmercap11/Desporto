/**
 * Script de configuração da base de daods
 */

 // dependências
const mysql = require("mysql");
const bdConfig = require("../config/db.config.js");

// dados do servidor de base de dados
let connection = mysql.createConnection({
    host: bdConfig.HOST,
    user: bdConfig.USER,
    password: bdConfig.PASSWORD,
    database: bdConfig.DB
});

module.exports = connection;

// exporta o script de conexão com a base de dados
module.exports.init = () => {

    // iniciar a conexão com a base de dados
    connection.connect((error) => {
        if(error) {
            console.log('Erro ao se conectar com o servidor de base de dados');
            console.log(error);
        }else {
            console.log('Base de dados conectada com sucesso');
        }
    });
}
