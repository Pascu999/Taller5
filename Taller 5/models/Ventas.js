const Sequelize = require('sequelize')
const db = require('../config/db')
const Cliente = require('./Clientes');
const Producto = require('./Clientes');

const Ventas= db.define('ventas',{
    venta_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    venta_total:{
        type: Sequelize.INTEGER,
    },
    venta_estado:{
        type: Sequelize.INTEGER,
        defaultValue:0
    }

},{
    timestamps : false
});
Ventas.belongsTo(Cliente,{foreignKey:'cliente_id'});
Ventas.belongsTo(Producto),{foreignKey:'producto_id'};

module.exports = Ventas;