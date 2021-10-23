'use strict';

const logger = (req, res, next) => {
  console.log('from logger mw','req.method: ',req.method,'req.header: ', req.headers);
  next();
};

module.exports = logger;
