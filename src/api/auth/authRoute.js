'use strict';

const express = require('express');
const authRoute = express.Router();

const { users } = require('../../api/models/index');
const basicAuth = require('./middleware/basic.js')
const bearerAuth = require('./middleware/bearer.js')
const permissions = require('./middleware/acl.js')

authRoute.post('/signup', async (req, res, next) => {
  try {
    let userRecord = await users.create(req.body);
    const output = {
      user: userRecord,
      token: userRecord.token
    };
    res.status(201).json(output);
  } catch (e) {
    next(e.message)
  }
});

authRoute.post('/signin', basicAuth, (req, res, next) => {
  const user = {
    user: req.user,
    token: req.user.token
  };
  res.status(200).json(user);
});

authRoute.get('/users', bearerAuth, permissions('delete'), async (req, res, next) => {
  const userRecords = await users.findAll({});
  const list = userRecords.map(user => user.username);
  res.status(200).json(list);
});

authRoute.get('/secret', bearerAuth, async (req, res, next) => {
  res.status(200).send('Welcome to the secret area')
});

module.exports = authRoute;