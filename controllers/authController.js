const { Request, Response } = require('express');
const { validate, parse } =  require('@telegram-apps/init-data-node');

/**
 * Sets init data in the specified Response object.
 * @param res - Response object.
 * @param initData - init data.
 */
function setInitData(res, initData) {
    res.locals.initData = initData;
  }
const token = process.env.PRIVATE_TOKEN;

function authenticateUser(req, res, next) {
  const [authType, authData = ''] = (req.header('authorization') || '').split(' ');
    switch (authType) {
        case 'tma':
          try {
            validate(authData, token, {
              expiresIn: 3600,
            });
            setInitData(res, parse(authData));
            return next();
          } catch (e) {
            return next(e);
          }
        // ... other authorization methods.
        default:
          return next(new Error('Unauthorized'));
      }
}
module.exports = {authenticateUser};


