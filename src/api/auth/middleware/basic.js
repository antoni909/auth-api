'use strict';

const base64 = require('base-64');
const { users } = require('../../models/index');
console.log('*** basic auth users:',users)
module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { return _authError(); }

  let basic = req.headers.authorization.split(' ').pop();
  let [username, password] = base64.decode(basic).split(':');

  try {
    req.user = await users.authenticateBasic(username, password)
    // console.log('*** basic auth req.user',req.user);
    next();
  } catch (e) {
    _authError()
  }

  function _authError() {
    res.status(403).send('Basic Auth Invalid Login');
  }

}
