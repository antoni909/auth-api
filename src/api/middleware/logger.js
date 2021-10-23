'use strict';

const logger = (req, res, next) => {
  try{
    console.log('REQUEST:', req.method, req.path);
  }catch(e){
    console.error(e);
  }finally{
    next();
  }
};

module.exports = logger;
