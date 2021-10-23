'use strict';
const logger = require('../src/middleware/logger');

describe('testing logger middleware', () => {

  test( 'logger logs req.header and req.method and calls next()', () => {
    // look at params to determine what logger accepts as argument
    let requestObject = {
      headers: 'test',
      method: 'test',
    };
    let responseObject = {};
    let nextFunction = jest.fn();

    logger(requestObject, responseObject, nextFunction);
    // make sure that next is to called
    expect(nextFunction).toHaveBeenCalled();
  });

});
