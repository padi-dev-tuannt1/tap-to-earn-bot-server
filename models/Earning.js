const {
    sequelize,
    DataTypes,
    Sequelize,
} = require("../config/mysql-sequelize");

const Earnings = sequelize.define(
    "Earnings", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        userid: {
            type: DataTypes.BIGINT,
            allowNull: false,
            references: {
                model: "tg_users",
                key: "userid",
            },
        },
        tap_score: {
            type: DataTypes.BIGINT,
            defaultValue: 0,
        },
        enery_restore_time: {
            type: DataTypes.DATE,
            defaultValue: null,
        },
        energy_remaning: {
            type: DataTypes.INTEGER,
            defaultValue: 2000,
        },
        created_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
        modified_date: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: Sequelize.NOW,
        },
    }, {
        tableName: "earnings",
        timestamps: false,
        indexes: [{
            fields: ["userid"],
        }, ],
        hooks: {
            beforeUpdate: (earnings, options) => {
                earnings.modifiydate = new Date();
            },
        },
    }
);

module.exports = Earnings;