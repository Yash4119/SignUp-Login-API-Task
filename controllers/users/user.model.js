const { DataTypes } = require("sequelize");

const { STRING } = DataTypes;

const userModel = (sequelize) => {
    const attributes = {
        name: { type: STRING, allowNull: false },
        email: { type: STRING, allowNull: false },
        password: { type: STRING, allowNull: false },
    };

    const options = {
        timestamps: true,
    };

    return sequelize.define("employee", attributes, options);
};

module.exports = userModel;