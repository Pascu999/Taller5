const Sequelize = require("sequelize");
module.exports = new Sequelize("taller5", "postgres", "11111", {
  host: "localhost",
  dialect: "postgres",
});
