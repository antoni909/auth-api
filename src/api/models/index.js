'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const userModel = require('../auth/models/users');
const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const Collection = require('./data-collection.js');

const DATABASE_URL = 
    process.env.NODE_ENV === 'test'
      ? 'sqlite:memory' 
      : process.env.DATABASE_URL;

let sequelizeOptions = process.env.NODE_ENV === 'production'
  ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
  : {};

const sequelize = new Sequelize(DATABASE_URL,sequelizeOptions);

const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const users = userModel(sequelize, DataTypes);

module.exports = {
  db: sequelize,
  users,
  food: new Collection(food),
  clothes: new Collection(clothes),
};
