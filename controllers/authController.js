const { Request, Response } = require('express');
const { validate, parse } = require('@telegram-apps/init-data-node');
const { User } = require("../models/User")
require('dotenv').config()

const token = "7658315769:AAFj-YincZkZ_1M7-55FX1drdwtwTkzDJXo";

async function authenticateUser(req, res, next) {
  const [authType, authData = ''] = (req.header('authorization') || '').split(' ');
  switch (authType) {
    case 'tma':
      try {
        validate(authData, token, {
          expiresIn: 3600,
        });
        const data = parse(authData);
        const user = await User.findOne({
          where: {
            userid: data.user.id,
          },
        });
        if (user === null) {
          const tg_user_data = {
            userid: data.user.id,
            username: data.user.username,
            first_name: data.user.firstName,
            last_name: data.user.lastName,
            language_code: data.user.languageCode,
            referral_by: "",
            referral_code: "",
          };
          const create_tg_user = await User.create(tg_user_data);
          if (!create_tg_user) {
            throw new Error(
              `TGUser insert failed in /api/tg/auth ${JSON.stringify(
                tg_user_data
              )}`
            );
          } else {
            const indata = { userid: id };
            const newUser = await Earnings.create(indata);
            if (!newUser) {
              throw new Error(
                `TGUser insert failed in /api/tg/auth ${JSON.stringify(
                  tg_user_data
                )}`
              );
            }
          }
        }
        return next();
      } catch (e) {
        return next(e);
      }
    // ... other authorization methods.
    default:
      return next(new Error('Unauthorized'));
  }
}
module.exports = { authenticateUser };


