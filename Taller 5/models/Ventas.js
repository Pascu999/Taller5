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
    },
    cliente_id:{
        type: Sequelize.INTEGER
    },
    producto_id:{
        type: Sequelize.INTEGER
    }

},{
    timestamps : false
});

module.exports = Ventas;