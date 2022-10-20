'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const db = {};

const mainConfig = require('../config/config.js')

db.main = new Sequelize(mainConfig)


fs
  .readdirSync(__dirname + '/main')
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname + '/main', file))(db.main, Sequelize.DataTypes);
    db[model.name] = model
  })

module.exports = db;