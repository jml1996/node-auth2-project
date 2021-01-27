const db = require("../database/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users")
    .select("id", "username", "department");
}

function findBy(username) {
  return db("users")
    .select("id", "username", "department", "password")
    .where("username", username);
}

async function add(user) {
  const [id] = await db("users").insert(user, "id");
  return findById(id);
}

function findById(id) {
  return db("users")
    .select("id", "username", "department")
    .where("id", id)
    .first();
}
