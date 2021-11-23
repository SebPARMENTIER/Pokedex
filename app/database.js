const {Sequelize} = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL,{
    define: {
      timestamps: false
    },
    logging: false
});

module.exports = sequelize;