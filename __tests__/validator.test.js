'use strict';
const validator = require('../src/middleware/validator');

describe('testing validator middleware', () => {

  test( 'validator checks if req.query.name is passed in a url query', () => {
    // look at params to determine what logger accepts as argument
    let requestObject = {
      query : {
        name: 'test',
      },
    };
    let responseObject = {};
    // jest spy on 'next()' 
    let nextFunction = jest.fn();

    validator(requestObject, responseObject, nextFunction);
    
    expect(requestObject).toEqual(
      {query: {
        name: 'test',
      }}
    );

    expect(nextFunction).toHaveBeenCalledWith();
    // expect(requestObject.query.name).toEqual('lorenzo');
  });
});
