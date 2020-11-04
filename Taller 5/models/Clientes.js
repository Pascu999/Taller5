const Sequelize = require('sequelize')
const db = require('../config/db')

const Clientes = db.define("clientes",{
    cliente_id  :{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true

    },

    cliente_identificacion:{
        type: Sequelize.CHAR,
        allowNull: false

    },
    cliente_nombre:{
        type: Sequelize.CHAR,
        allowNull: false

    },
    cliente_apellido:{
        type: Sequelize.CHAR,
        allowNull: false
    },
    cliente_sexo:{
        type:Sequelize.INTEGER,
        allowNull:false

    },
    cliente_telefono:{
        type: Sequelize.CHAR,
        

    },
    cliente_fecha_nacimiento:{
        type: Sequelize.DATEONLY,
        allowNull: false

    },
    cliente_estado:{
        type: Sequelize.INTEGER
    }
},{
    timestamps : false
});

module.exports = Clientes;