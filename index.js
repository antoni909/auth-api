'use strict';

require('dotenv').config();
const app = require('./src/api/server.js');

// originally api db
const { db } = require('./src/api/models');

// originally auth db
// const { db } = require('./src/auth/models');



db.sync().then(() => {
  app.start(process.env.PORT || 3001);
});
