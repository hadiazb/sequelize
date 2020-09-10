const express = require('express');
const app = express();
// const debug = require('debug')('app:server');
const bodyParser = require('body-parser');

const config = require('./config/index');
const sequelize = require('./store/db');

app.use(bodyParser.json());


app.listen(config.app.port, () => {
  console.log(`Listening on http://localhost:${config.app.port}`);

  // sequelize.authenticate().then(() => {
  //   console.log('Base de datos conectada!!!');
  // }).catch(error => {
  //   console.log('Se produjo un a error', error);
  // })
})