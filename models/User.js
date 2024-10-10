const { Sequelize, DataTypes, Model } = require('@sequelize/core');
const { Attribute, PrimaryKey, AutoIncrement, NotNull, Default } = require('@sequelize/core/decorators-legacy');
const { MySqlDialect } = require('@sequelize/mysql');
const sequelize = new Sequelize({ dialect: MySqlDialect });

module.exports = class User extends Model {
  id;
  userid;
  username;
  first_name;
  last_name;
  language_code;
  referral_code;
  ref_claim;
  tg_premium_user;
  created_date;
  modified_date;
};
User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  userid: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  first_name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  last_name: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  language_code: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  referral_code: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  referral_by: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },
  ref_claim: {
    type: DataTypes.ENUM("Y", "N"),
    allowNull: false,
    defaultValue: "N",
  },
  tg_premium_user: {
    type: DataTypes.ENUM("Y", "N"),
    allowNull: false,
    defaultValue: "N",
  },
  created_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  modified_date: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, { sequelize, modelName: 'User' });
// module.exports = class User extends Model {
//     @Attribute(DataTypes.INTEGER)
//     @PrimaryKey
//     @AutoIncrement
//     id;
  
//     @Attribute(DataTypes.INTEGER)
//     @NotNull
//     userid;
  
//     @Attribute(DataTypes.STRING)
//     username;

//     @Attribute(DataTypes.STRING)
//     first_name;

//     @Attribute(DataTypes.STRING)
//     last_name;

//     @Attribute(DataTypes.STRING)
//     language_code;

//     @Attribute(DataTypes.STRING)
//     referral_code;

//     @Attribute(DataTypes.ENUM(["Y", "N"]))
//     @Default("N")
//     @NotNull
//     ref_claim;
    
//     @Attribute(DataTypes.ENUM(["Y", "N"]))
//     @Default("N")
//     @NotNull
//     tg_premium_user;

//     @Attribute(DataTypes.DATE)
//     @Default(DataTypes.NOW)
//     @NotNull
//     created_date;

//     @Attribute(DataTypes.DATE)
//     @Default(DataTypes.NOW)
//     @NotNull
//     modified_date;
//   }