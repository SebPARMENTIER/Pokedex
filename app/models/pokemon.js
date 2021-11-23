const Sequelize = require('sequelize');
const sequelize = require('../database');

class Pokemon extends Sequelize.Model {};

Pokemon.init({
    nom: 
        Sequelize.STRING,
        
    pv: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    attaque: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    defense: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    attaque_spe: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    defense_spe: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    vitesse: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    numero: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{
    sequelize,
    tableName: "pokemon"
    }
);

module.exports = Pokemon;