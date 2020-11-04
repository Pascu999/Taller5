const Sequelize = require("sequelize");
module.exports = new Sequelize("Taller5", "postgres", "11111", {
  host: "localhost",
  dialect: "postgres",
});
