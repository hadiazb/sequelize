const users = require('../../util/mocks/user');
const services = require('../../util/mocks/services');
const reviews = require('../../util/mocks/reviews');
const auth = require('../../util/mocks/auth');

const database = {
  users,
  services,
  reviews,
  auth,
};

const list = (table) => {
  return database[table];
};

const get = (tabla, id) => {
  let col = list(tabla);
  return col.filter((item) => item.id === id)[0] || null;
};

const insert = (tabla, data) => {
  if (!database[tabla]) {
    database[tabla] = [];
  }
  database[tabla].push(data);
};

const update = (table, id) => {
  const { idService } = get(table, id);
  return idService ? [1] : [0];
};

const remove = () => {
  return true;
};

module.exports = {
  list,
  get,
  insert,
  update,
  remove,
};
