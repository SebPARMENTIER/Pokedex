const Sequelize = require('sequelize');
const sequelize = require('../database');

class Type extends Sequelize.Model {};

Type.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    color: {
        type: Sequelize.STRING,
        allowNull: false
    },
},
    {
    sequelize,
    tableName: "type"
    });

    module.exports = Type;