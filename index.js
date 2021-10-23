'use strict';

require('dotenv').config();
const app = require('./src/api/server.js');

const { db } = require('./src/api/models');

db.sync().then(() => {
  app.start(process.env.PORT || 3001);
});
