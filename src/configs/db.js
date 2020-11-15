const { Sequelize } = require("sequelize");

module.exports = new Sequelize('test', 'root', '', {
    port: 3306,
    host: '127.0.0.1',
    dialect: 'mysql',
    define:{
        timestamps: false
    },
    pool:{
        min: 0,
        max:5,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});