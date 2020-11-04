const Sequelize = require('sequelize')
const db = require('../config/db')

const Productos = db.define("productos",{
    producto_id  :{
        type: Sequelize.INTEGER,
        primaryKey:true,

    },

    producto_nombre:{
        type: Sequelize.CHAR,
        allowNull: false

    },
    producto_descripcion:{
        type: Sequelize.CHAR,
        allowNull: false

    },
    producto_precio_unitario:{
        type: Sequelize.INTEGER,
    
    },
    producto_estado:{
        type: Sequelize.INTEGER,
        defaultValue:0
    }
},

{
    timestamps : false
});

module.exports = Productos;