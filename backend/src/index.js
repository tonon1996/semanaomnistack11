const express = require('express');
const cors = require('cors'); 
const routes = require('./routes');
const app= express();

app.use(cors());
app.use(express.json());
app.use(routes);
/**
 * Rota / HTTP
 * 
 * GET: Buscar informações do back-end.
 * POST: Cria informações no back-end.
 * PUT: Alterar infomações no back-end.
 * DELETE: Deletar informções no back-end.
*/

/**
 * Tipos de parâmentros
 * 
 * Query Params: Parâmentros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parâmentros utilizados para enviar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */


 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL: MongoDB, CouchDB
  */

app.listen(3333);