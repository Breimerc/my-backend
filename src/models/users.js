const { Sequelize } = require('sequelize');
const db = require('../configs/db');

module.exports = db.define('users', {
    id:{
        primaryKey: true,
        type: Sequelize.INTEGER,
        unique: true,
        autoIncrement: true,
        required: true
    },
    user:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false,
        unique: false
    }
}, {
    paranoid: true,
    underscored: true,
    timestamps: true,
    freezeTableName: true,
    tableName: 'users'
});
