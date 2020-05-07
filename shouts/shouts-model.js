const db = require("../data/db.js");

module.exports = {
  find,
  add,
  remove,
};

function find() {
  return db("shouts");
}

function add(shout) {
  return db("shouts")
    .insert(shout, "id")
    .then(([id]) => findById(id));
}

function findById(id) {
  return db("shouts").where({ id }).first();
}

function remove(id) {
  return db("shouts").where({ id }).delete();
}
